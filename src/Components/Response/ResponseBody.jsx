import React from 'react';
import { Paper } from '@material-ui/core';

const ResponseBody = ({ data }) => {
  const jsonString = JSON.stringify(data, null, 2);

  return (
    <Paper elevation={3} style={{ marginTop: 20, overflow: 'hidden', border: '3px solid rgba(128, 168, 168,1)', borderRadius: 8 }}>
      <div style={{ height: '290px', width: '100%', padding: '10px', whiteSpace: 'pre-wrap', overflowY: 'auto'}}>
        <pre>{jsonString}</pre>
      </div>
    </Paper>
  );
};

export default ResponseBody;


