import { TableCell, TableRow, Checkbox, TextField } from "@material-ui/core"
import { makeStyles } from "@mui/styles";
import { withStyles } from '@material-ui/core/styles';
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faTrash } from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles({

    TableCell:{
        border: '1px solid rgba(128, 168, 168,1)',
        borderCollapse:'collapse',
        padding: ['7px 5px', '!important'],
    },  
})

const Mystyles = {
    border: '2px solid #9c27b0',
    borderRadius: '4px',
    width: '98%',
    marginLeft: 2,
    marginRight:2
}

const PurpleCheckbox = withStyles({
    root: {
      padding: '2px 5px',
      color: '#9c27b0', // Purple color
      '&$checked': {
        color: '#9c27b0', // Purple color when checked
      },
    },
    checked: {}, // Empty rule for the checked state
  })((props) => <Checkbox color="default" {...props} />);

  const AddRow = ({ addRows, rowId, data, setData }) => {
    const [checkBox, setCheckBox] = useState(false);
    const [clickBox, setClickBox] = useState(false);
  
    const handleClick = () => {
      if (!clickBox) {
        setClickBox(true);
        addRows(oldArr => [...oldArr, rowId]);
      } else {
        setClickBox(false);
      }
    };
  
    const handleChange = (e) => {
      let result = data.find(entry => entry.id === Number(e.target.name));
  
      if (!checkBox) {
        setCheckBox(true);
        result = { ...result, id: rowId, check: true };
      } else {
        setCheckBox(false);
        result = { ...result, id: rowId, check: false };
      }
  
      let index = data.findIndex((value) => value.id === Number(e.target.name));
      if (index === -1) {
        setData(oldArr => [...oldArr, result]);
      } else {
        const newArray = Object.assign([...data], {
          [index]: result
        });
        setData(newArray);
      }
    };
  
    const onTextChange = (e) => {
      let result = data.find(entry => entry.id === rowId);
      result = { ...result, id: rowId, [e.target.name]: e.target.value };
  
      let index = data.findIndex((value) => value.id === rowId);
  
      if (index === -1) {
        setData(oldArr => [...oldArr, result]);
      } else {
        const newArray = Object.assign([...data], {
          [index]: result
        });
        setData(newArray);
      }
    };
  
      // Remove the row with the given rowId from the data array
      const handleDelete = (id) => {
        // Log the current state before deletion
        console.log('Before deletion - Current Data:', data);
      
        // Filter out the row with the given rowId
        const newData = data.filter((row) => row.id !== rowId);
        
        // Log the updated state after deletion
        console.log('After deletion - Updated Data:', newData);
      
        // Update the state with the new data
        setData([...newData]);

        // Remove the row from the UI
        addRows((prevRows) => prevRows.filter((row) => row !== rowId));

        // Ensure there's at least one row remaining
        if (newData.length === 0) {
          addRows([]);
        }
      };
      
    const classes = useStyles();
  
    return (
      <TableRow>
        <TableCell align="left" className={classes.TableCell}>
          <PurpleCheckbox
            checked={checkBox}
            onChange={(e) => handleChange(e)}
            name={rowId}
          />
        </TableCell>
        <TableCell align="left" className={classes.TableCell}>
          <TextField
            inputProps={{ style: { height: 30, padding: '0 5px' } }}
            className={classes.textField}
            style={Mystyles}
            onChange={(e) => onTextChange(e)}
            name="key"
          />
        </TableCell>
        <TableCell align="left" className={classes.TableCell}>
          <TextField
            inputProps={{ style: { height: 30, padding: '0 5px' } }}
            className={classes.textField}
            style={Mystyles}
            onChange={(e) => onTextChange(e)}
            name="value"
          />
        </TableCell>
        <TableCell align="center" className={classes.TableCell}>
          <FontAwesomeIcon
            icon={faPlusCircle}
            size="lg"
            checked={clickBox}
            onClick={handleClick}
            style={{ marginRight: '8px', boxShadow: clickBox ? '0 0 10px rgba(255,255,255, 0.7)' : 'none', transition: 'box-shadow 0.3s ease', cursor: 'pointer'  }}
          />
          <FontAwesomeIcon icon={faTrash} size="lg" onClick={(e) => handleDelete(e)} style={{ cursor: 'pointer' }} />
        </TableCell>
      </TableRow>
    );
  };
  
  export default AddRow;
  