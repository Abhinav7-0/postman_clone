import { Box, Select, MenuItem} from "@material-ui/core";
import { TextField, Button} from "@mui/material";
import { makeStyles} from '@mui/styles';
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

const useStyles = makeStyles({
    component:{
        display: 'flex',
        alignItem: 'center',
        justifyContent: 'space-between',
    },
    Select:{
        width: 150,
        height: 42,
        background: '#F6F6F6',
        paddingLeft:10,
        paddingRight:10,
    },
    textfield: {
        width: '100%',
        background: '#F6F6F6',
        marginLeft: [5, '!important']
    },
    button:{
        width:100,
        height: 40,
        marginLeft:[5, '!important']
    },
})

const Mystyles = {
  border: '1px solid #000000',
  borderRadius: '4px'
}

const theme = createTheme({
  typography: {
    fontFamily: "Nunito Sans, Roboto, sans-serif"
  }
});

const Form = () => {
    const classes = useStyles();

    return(
      <Box className={classes.component}>
        <ThemeProvider theme={theme}>
          <Select label="POST" className={classes.Select} style={Mystyles}>
            <MenuItem value={'POST'}>POST</MenuItem>
            <MenuItem value={'GET'}>GET</MenuItem>
            <MenuItem value={'DELETE'}>DELETE</MenuItem>
          </Select>
        </ThemeProvider>
        <ThemeProvider theme={theme}>
          <TextField size="small" className={classes.textfield} style={Mystyles}/>
        </ThemeProvider>
        <ThemeProvider theme={theme}>
          <Button className={classes.button} variant="contained">
            Send 
          </Button>
        </ThemeProvider>
      </Box>       
    )
}

export default Form;