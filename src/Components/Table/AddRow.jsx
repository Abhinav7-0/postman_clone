import { TableCell, TableRow, Checkbox, TextField } from "@material-ui/core"
import { makeStyles } from "@mui/styles";
import { withStyles } from '@material-ui/core/styles';

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

const AddRow = () => {

    const classes = useStyles();

    return(
        <TableRow>
            <TableCell align="left" className={classes.TableCell}><PurpleCheckbox/></TableCell>
            <TableCell align="left" className={classes.TableCell}><TextField inputProps={{style: {height: 30, padding:'0 5px'}}} className={classes.textField} style={Mystyles} /></TableCell>
            <TableCell align="left" className={classes.TableCell}><TextField inputProps={{style: {height: 30, padding:'0 5px'}}} className={classes.textField} style={Mystyles} /></TableCell>
        </TableRow>
    )
}

export default AddRow;