import { makeStyles, Box } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '8px 16px', 
  },
  logo: {
    width: 160,
    marginTop: 4,
  },
  font: {
    marginLeft: 8,
    marginRight: 8,
    height: 30,
    weight: 10,
    cursor: 'pointer'
  },
});

const Header = ({onClick}) => {
  const classes = useStyles();
  const logo =
    'https://www.dcvelocity.com/ext/resources/user-submissions/articles/bea7ca44-08a4-44ff-a5af-622605a12fb5.png?height=635&t=1602116058&width=1200';

  return (
    <Box className={classes.header}>
      <img src={logo} alt="logo" className={classes.logo} />
      <FontAwesomeIcon icon={faClockRotateLeft} size="lg" className={classes.font}  onClick={onClick}/>
    </Box>
  );
};

export default Header;

