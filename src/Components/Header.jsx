import {makeStyles, Box} from '@material-ui/core';

const useStyles = makeStyles({
    logo: {
        width:110,
        padding: 10,
    },
    Component: {
        backgroundColor: '#000000',
        marginBottom: 30
    }
})

const Header = () => {
    const logo = "https://miro.medium.com/max/802/1*dLWPk_rziSpWhPx1UWONbQ@2x.png";
    const classes = useStyles();

    return(
        <Box className={classes.Component}>
            <img src={logo} alt="logo" className = {classes.logo}/>
        </Box>   
    )
}

export default Header;