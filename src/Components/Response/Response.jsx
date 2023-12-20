import { Box, Tabs, Tab } from "@mui/material";
import { useState } from "react";
import { makeStyles } from "@mui/styles";
import ResponseBody from "./ResponseBody";

//components 

const useStyles = makeStyles({
   box: {
    marginTop: 10
   },
   Tab: {
    fontWeight:["bold", "!important"],
   }
})

const Response = () => {
    //const [paneValue, setPaneValue] = useState();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    const classes = useStyles();

  return(
     <Box sx={{width:'100%'}} className={classes.box}>
        <Tabs value={value} onChange={handleChange}  textColor="secondary" indicatorColor="secondary" TabIndicatorProps={{sx : {height:4, bottom:2}}}>
            <Tab  label="Response Body" className={classes.Tab}/>
            <Tab  label="Request Header" className={classes.Tab}/>
            <Tab  label="Test Results" className={classes.Tab}/>  
        </Tabs>
        <Box role="tabpanel" hidden={value !== 0} id={`simple-tabpanel-${0}`} aria-labelledby={`simple-tab-${0}`}>
            <ResponseBody/>
        </Box>
        <Box role="tabpanel" hidden={value !== 1} id={`simple-tabpanel-${1}`} aria-labelledby={`simple-tab-${1}`}>
        </Box>
        <Box role="tabpanel" hidden={value !== 2} id={`simple-tabpanel-${1}`} aria-labelledby={`simple-tab-${1}`}>
        </Box>
     </Box>
  );
}

export default Response;