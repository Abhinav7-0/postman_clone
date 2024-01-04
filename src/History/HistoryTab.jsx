import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HistoryItem from './HistoryItem'; 
import { Paper, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

const HistoryTab = () => {
  const [historyData, setHistoryData] = useState([]);
  

  const useStyles = makeStyles({
    component: {
      width: '60%',
      margin: '20px auto 20px auto',
    },
  });

  const handleDelete = (itemId) => {
    setHistoryData((prevData) => prevData.filter((item) => item.id !== itemId));
  };

  useEffect(() => {
    fetchHistoryData();
  }, []);

  const fetchHistoryData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/history');
      const responseData = response.data;
      setHistoryData(responseData);
    } catch (error) {
      console.error('Error fetching history data:', error);
    }
  };

  const classes = useStyles(); 

  return (
    <Box className={classes.component} >
    <Paper  elevation={3} style={{ marginTop: 20, overflow: 'hidden', border: '3px solid rgba(128, 168, 168,1)', borderRadius: 8 }}>
      <div style={{ marginLeft: 10, marginRight: 10 }}>
      <h2>Request History</h2>
      {historyData.map((historyItem) => (
        <HistoryItem key={historyItem.id} data={historyItem} onDelete={handleDelete}/>
      ))}
      </div>
    </Paper>
    </Box>
  );
};

export default HistoryTab;
