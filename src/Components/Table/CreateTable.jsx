import { Typography, Table, TableBody, TableHead, TableRow, TableCell, Box, Paper} from "@material-ui/core";
import { makeStyles } from "@mui/styles";
import AddRow from "./AddRow";

const useStyles = makeStyles({
    root: {
        margin: [10, "!important"],
    }, 
    TableCell:{
        border: '1px solid rgba(128, 168, 168,1)',
        borderCollapse:'collapse',
        padding: ['7px 5px', '!important'] 
    },
    paper: {
        borderRadius: "5px",
        overflow: "hidden",
        border: '2px solid rgba(128, 168, 168,1)',
        marginBottom: [10, "!important"],
    },
    /**purpleCheckbox: {
        color: '#9c27b0', // Purple color
        '&$checked': {
          color: '#9c27b0', // Purple color when checked
        },
        checked: {},
    },*/
})



const CreateTable = ({text}) => {
    const classes = useStyles();
    return(
        <Box>
            <Typography className={classes.root}><h3>{text}</h3></Typography>
            <Paper className={classes.paper}>
                <Table sx={{ minWidth: '100%' }}>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" className={classes.TableCell}>
                            </TableCell>
                            <TableCell align="center" className={classes.TableCell}>KEY</TableCell>
                            <TableCell align="center" className={classes.TableCell}>VALUE</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <AddRow />
                    </TableBody>
                </Table>
            </Paper>
        </Box>
    )
}

export default CreateTable;