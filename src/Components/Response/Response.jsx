import { Box, Tabs, Tab } from "@mui/material";
import { useContext, useState } from "react";
import { makeStyles } from "@mui/styles";
import ResponseBody from "./ResponseBody";
import TestResults from "../../Tests/TestResults";
import { DataContext } from "../../Context/DataProvider";
import CustomTestResults from "../../Tests/CustomTestResults";

//components 

const useStyles = makeStyles({
   box: {
    marginTop: 10
   },
   Tab: {
    fontWeight:["bold", "!important"],
   }
})

const Response = ({data}) => {
    //const [paneValue, setPaneValue] = useState();
    const {tests} = useContext(DataContext);
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    const classes = useStyles();

  return(
     <Box sx={{width:'100%'}} className={classes.box}>
        <Tabs value={value} onChange={handleChange}  textColor="secondary" indicatorColor="secondary" TabIndicatorProps={{sx : {height:4, bottom:2}}}>
            <Tab  label="Response Body" className={classes.Tab}/>
            <Tab  label="Default Test Results" className={classes.Tab}/>
            <Tab  label="Custom Test Results" className={classes.Tab}/>
        </Tabs>
        <Box role="tabpanel" hidden={value !== 0} id={`simple-tabpanel-${0}`} aria-labelledby={`simple-tab-${0}`}>
            <ResponseBody data={data}/>
        </Box>
        <Box role="tabpanel" hidden={value !== 1} id={`simple-tabpanel-${1}`} aria-labelledby={`simple-tab-${1}`}>
            <TestResults data={data} status={data?.status} tests={tests}/>
        </Box>
        <Box role="tabpanel" hidden={value !== 2} id={`simple-tabpanel-${1}`} aria-labelledby={`simple-tab-${1}`}>
            <CustomTestResults response={data}/>
        </Box>
     </Box>
  );
}

export default Response;