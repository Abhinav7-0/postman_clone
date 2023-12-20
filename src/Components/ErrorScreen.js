import { Box, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    error: {
        // objectFit: 'cover',
        width: '80%',
        height: 'auto',
        objectPosition: 'center 0%',
        margin: 'auto'
    }
})


const ErrorScreen = () => {
    const error = 'https://i.stack.imgur.com/01tZQ.png';
    const classes = useStyles();

    return (
    <Paper elevation={3} style={{ padding: 10, marginTop: 20, overflow: 'auto' }}>
      <Box style={{display: 'flex'}}>
        <img src={error} alt="error" className={classes.error}></img>
      </Box>
    </Paper>
    )
}

export default ErrorScreen;