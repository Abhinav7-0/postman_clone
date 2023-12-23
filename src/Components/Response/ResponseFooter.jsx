// ResponseFooter.jsx

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  footer: {
    marginTop: 20,
    padding: 10,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(128, 168, 168, 0.2)',
    border: '3px solid rgba(128, 168, 168, 1)',
  },
});

const ResponseFooter = ({ statusCode, responseSize, responseTime }) => {
  const classes = useStyles();

  if (statusCode === null) {
    return (
     <>
        <Paper elevation={3} className={classes.footer}>
          <Typography variant="subtitle1">Status Code: </Typography>
          <Typography variant="subtitle1">Response Size: bytes</Typography>
          <Typography variant="subtitle1">Response Time: ms</Typography>
        </Paper>
     </>
    ); // or display any loading message
  }

  return (
    <Paper elevation={3} className={classes.footer}>
      <Typography variant="subtitle1">Status Code: {statusCode}</Typography>
      <Typography variant="subtitle1">Response Size: {responseSize} bytes</Typography>
      <Typography variant="subtitle1">Response Time: {responseTime} ms</Typography>
    </Paper>
  );
};

export default ResponseFooter;
