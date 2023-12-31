import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { Box, Typography } from '@mui/material';
import { useContext} from 'react';
import { DataContext } from '../Context/DataProvider'; 

const HistoryItem = ({ data, onDelete, onItemClick }) => {

    const { setFormData, formData} = useContext(DataContext);
    const handleDelete = async () => {
        try {
          
          await axios.delete(`http://localhost:8080/api/history/${data.id}`);
          onDelete(data.id);
        } catch (error) {
          console.error('Error deleting history item:', error);
        }
      };

      const handleClick = (url, method) => {
        setFormData({ ...formData, url, type:method });
        console.log(formData);
      }
      
  return (
    <>
   <Box>
      <hr/>
      <Box display="flex" alignItems="center" 
          style={{ cursor: 'pointer' }}>
        <Box flexGrow={1} onClick={() => handleClick(data.url, data.method)} >
          <Typography variant="subtitle1">Method: {data.method}</Typography>
          <Typography variant="subtitle1">URL: {data.url}</Typography>
          <Typography variant="subtitle1">Status: {data.statusCode}</Typography>
        </Box>
        <Box>
          <FontAwesomeIcon icon={faTrash} size="lg" onClick={handleDelete} style={{ marginBottom: 5, cursor: 'pointer' }}/> 
        </Box>
      </Box>
    </Box>
    </>
  );
};

export default HistoryItem;
