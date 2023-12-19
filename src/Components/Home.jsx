import Header from './Header'
import Form from './Form'
import { Box } from '@material-ui/core'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    component:{
        width: '60%',
        margin: '20px auto 0 auto'
    },
})

const Home = () => {

    const classes = useStyles();

    return(
        <>
        <Header/>
        <Box className={classes.component}>
           <Form/>
        </Box>
        </>
    )
}

export default Home;