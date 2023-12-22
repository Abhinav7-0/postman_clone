import React, { useEffect, useRef, useContext } from 'react';
import { Paper, Typography, Box, Button } from '@material-ui/core';
import { EditorView, keymap } from '@codemirror/view';
import { EditorState, basicSetup } from '@codemirror/basic-setup';
import { json } from '@codemirror/lang-json';
import { DataContext } from '../../Context/DataProvider';
import { fetchData} from '../../Service/api';


const JsonEditor = () => {
  const { jsonText, setjsonText, formData, paramData, headerData } = useContext(DataContext);
  const editorRef = useRef();

  const onValueChange = (e) => {
    setjsonText(e.target.value);
    console.log(setjsonText)
  };

  useEffect(() => {
    if (editorRef.current === null) return;

    const view = new EditorView({
      state: EditorState.create({
        doc: '', // Set an empty string as the initial document
        extensions: [basicSetup, keymap.of([]), json()],
      }),
      parent: editorRef.current,
    });

    return () => {
      view.destroy();
    };
  }, []); // Removed editorRef.current from the dependency array

  const onSendData = async () => {
    try {
      const response = await fetchData(formData.url, 'POST', JSON.parse(jsonText), paramData, headerData);
      console.log('Response:', response);
      // Handle the response as needed
    } catch (error) {
      console.error('Error sending data:', error);
      // Handle the error as needed
    }
  };
  

  return (
    <Box>
      <Typography>
        <h3 style={{ margin: '18px' }}>Body</h3>
      </Typography>
      <Paper elevation={3} style={{ marginTop: 10, overflow: 'auto', border: '3px solid rgba(128, 168, 168,1)' }}>
        <div ref={editorRef} style={{ height: '200px', width: '100%' }} onChange={(e) => onValueChange(e)} />
      </Paper>
      <Button variant="contained" style={{backgroundColor: "#1976D2", color:"#FFFFFF", marginTop:'5px'}} onClick={onSendData}>
        Send Data
      </Button>
    </Box>
  );
};

export default JsonEditor;
