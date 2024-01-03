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

  const AddRow = ({ addRows, rowId, data, setData, removeRow}) => {
    const [checkCheckbox, setCheckCheckbox] = useState(false);
    const [clickBox, setClickBox] = useState(false);
  
    const handleClick = () => {
      if (!clickBox) {
        setClickBox(true);
        addRows(oldArr => [...oldArr, rowId]);
      } else {
        setClickBox(false);
      }
    };

    const handleDelete = () => {
      removeRow(rowId);
      console.log('Clicked to delete row, rowId:', rowId, 'Data:', data); // Log the data
    };
  
    const handleChange = (e) => {
        
      let result = data.filter(entry => entry.id === Number(e.target.name))[0];
      
      if (!checkCheckbox) {
          setCheckCheckbox(true);
          result = { ...result, id: rowId, check: true }
      } else {
          setCheckCheckbox(false);
          result = { ...result, id: rowId, check: false }
      }
      
      let index = data.findIndex((value) => value.id === Number(e.target.name));
      if (index === -1) {
          setData(oldArr => [...oldArr, result]);
      } else {
          const newArray = Object.assign([...data], {
              [index]: result
          });
          setData(newArray)    
      }
  }
  
    const onTextChange = (e) => {
      let result = data.filter(entry => entry.id === rowId)[0];
      result = { ...result, id: rowId, [e.target.name]: e.target.value }

      let index = data.findIndex((value) => value.id === rowId);
      
      if (index === -1) {
          setData(oldArr => [...oldArr, result]);
      } else {
          const newArray = Object.assign([...data], {
              [index]: result
          });
          setData(newArray)    
      }
    } 

    const classes = useStyles();
  
    return (
      <TableRow>
        <TableCell align="left" className={classes.TableCell}>
          <PurpleCheckbox
            checked={checkCheckbox}
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
          <FontAwesomeIcon icon={faTrash} size="lg" style={{ cursor: 'pointer' }} onClick={handleDelete}/>
        </TableCell>
      </TableRow>
    );
  };
  
  export default AddRow;
  