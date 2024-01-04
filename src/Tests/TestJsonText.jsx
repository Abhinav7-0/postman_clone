import { useContext } from "react";
import { DataContext } from "../Context/DataProvider";
import { Box, Typography,Paper } from "@mui/material";

const TestJsonText = () => {

    const {testJson, setTestJson} = useContext(DataContext);

    const handleJsonTextChange = (e) => {
        setTestJson(e.target.value);
      };
    
      const clearJsonText = () => {
        setTestJson('');
      };
    
      return (
        <Box>
          <Typography>
             <h3 style={{ margin: '18px' }}>Custom Tests</h3>
          </Typography>
          <Paper style={{ marginTop: 10, overflow: 'hidden', border: '3px solid rgba(128, 168, 168,1)', borderRadius: 8 }}>
            <div>
             <textarea style={{ height: '200px', width: '100%',  resize: 'none', border: 'none', outline: 'none', padding: '8px'  }} 
             value={testJson}
             onChange={handleJsonTextChange}
             />
            </div>
          </Paper>
        </Box>
      );

}

export default TestJsonText;