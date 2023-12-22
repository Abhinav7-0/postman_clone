import { Box, Typography, Button, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    error: {
        width: '80%',
        height: 'auto',
        margin: 'auto'
    },
    errorText: {
        textAlign: 'center',
        color: 'red',
        marginBottom: '20px'
    },
    retryButton: {
        display: 'block',
        margin: 'auto',
        backgroundColor: '#9c27b0', // Purple color
        color: 'white',
        '&:hover': {
            backgroundColor: '#7b1fa2', // Darker purple color on hover
        },
    },
});

const ErrorScreen = ({ onRetry }) => {
    const classes = useStyles();
    const errorImageUrl = 'https://i.stack.imgur.com/01tZQ.png';

    return (
        <Paper elevation={3} style={{ marginTop: 20, overflow: 'auto', border: '3px solid rgba(128, 168, 168,1)' }}>
            <div style={{ height: '380px', width: '100%', padding: '10px', whiteSpace: 'pre-wrap' }}>
                <Typography variant="h5" className={classes.errorText}>Oops! Something went wrong.</Typography>
                <Box style={{ display: 'flex' }}>
                        <img src={errorImageUrl} alt="error" className={classes.error} />
                </Box>
                <Button variant="contained" className={classes.retryButton} onClick={onRetry}>
                        Retry
                </Button>
            </div>
        </Paper>
    );
};

export default ErrorScreen;

