import {makeStyles, Box} from '@material-ui/core';

const useStyles = makeStyles({
    logo: {
        width:160,
        marginTop: 4,
    },
    Component: {
        backgroundColor: '#547087',
    }
})

const Header = () => {
    const classes = useStyles();
    const logo = "https://www.dcvelocity.com/ext/resources/user-submissions/articles/bea7ca44-08a4-44ff-a5af-622605a12fb5.png?height=635&t=1602116058&width=1200000000000"

   // "https://www.dcvelocity.com/ext/resources/user-submissions/articles/bea7ca44-08a4-44ff-a5af-622605a12fb5.png?height=635&t=1602116058&width=1200"

    return(
        <Box className={classes.Component}>
            <img src={logo} alt="logo" className={classes.logo}/>
        </Box>   
    )
}

export default Header;