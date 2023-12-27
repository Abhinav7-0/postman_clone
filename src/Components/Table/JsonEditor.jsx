import React, { useEffect, useRef, useContext } from 'react';
import { Paper, Typography, Box} from '@material-ui/core';
import { EditorView, keymap } from '@codemirror/view';
import { EditorState, basicSetup } from '@codemirror/basic-setup';
import { json } from '@codemirror/lang-json';
import { DataContext } from '../../Context/DataProvider';

const JsonEditor = () => {
  const { jsonText, setjsonText} = useContext(DataContext);
  const editorRef = useRef();

  console.log('jsonText in JsonEditor:', jsonText)

  const onValueChange = (e) => {
    console.log('Input value:', e.target.value);
    setjsonText(e.target.value);
    console.log(setjsonText)
  };

  useEffect(() => {
    if (editorRef.current === null) return;

    const view = new EditorView({
      state: EditorState.create({
        doc: jsonText, // Set an empty string as the initial document
        extensions: [basicSetup, keymap.of([]), json()],
      }),
      parent: editorRef.current,
    });

    return () => {
      view.destroy();
    };
  }, [jsonText]); // Removed editorRef.current from the dependency array

  
  
  
  return (
    <Box>
      <Typography>
        <h3 style={{ margin: '18px' }}>Body</h3>
      </Typography>
      <Paper elevation={3} style={{ marginTop: 10, overflow: 'hidden', border: '3px solid rgba(128, 168, 168,1)', borderRadius: 8 }}>
        <div>
          <textarea ref={editorRef} style={{ height: '200px', width: '100%',  resize: 'none', border: 'none', outline: 'none', padding: '8px'  }} onChange={onValueChange} value={jsonText} />
        </div>
      </Paper>
    </Box>
  );
};

export default JsonEditor;
