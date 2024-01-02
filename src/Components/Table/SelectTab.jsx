/* eslint-disable no-unused-vars */
import { Box, Tabs, Tab } from "@mui/material";
import { useState, useContext } from "react";
import { makeStyles } from "@mui/styles";

//components 
import CreateTable from "./CreateTable";
import JsonEditorPanel from "./JsonEditor";
import Tests from "../../Tests/Tests"
import { DataContext } from "../../Context/DataProvider";

const useStyles = makeStyles({
   box: {
    marginTop: 10
   },
   Tab: {
    fontWeight:["bold", "!important"],
   }
})

const SelectTab = () => {
   const [paneValue, setPaneValue] = useState();
   const [value, setValue] = useState(0);

   const { ParamData, SetParamData, HeaderData, SetHeaderData} = useContext(DataContext);
   console.log('ParamData:', ParamData);
   console.log('HeaderData:', HeaderData);

   const handleChange = (event, newValue) => {
       console.log('Tab Changed:', newValue);
        setValue(newValue);
    }

    const classes = useStyles();

  return(
     <Box sx={{width:'100%'}} className={classes.box}>
        <Tabs value={value} onChange={handleChange}  textColor="secondary" indicatorColor="secondary" TabIndicatorProps={{sx : {height:4, bottom:2}}}>
            <Tab  label="Params" className={classes.Tab}/>
            <Tab  label="Headers" className={classes.Tab}/> 
            <Tab  label="Body" className={classes.Tab}/>
            <Tab  label="Tests" className={classes.Tab}/>         
        </Tabs>
        <Box 
            role="tabpanel" 
            hidden={value !== 0} 
            id={`simple-tabpanel-${0}`} 
            aria-labelledby={`simple-tab-${0}`} 
        >
           <CreateTable text={"Query Params"} data={ParamData} setData={SetParamData}/>
        </Box>
        <Box role="tabpanel" hidden={value !== 1} id={`simple-tabpanel-${1}`} aria-labelledby={`simple-tab-${1}`}>
           <CreateTable text={"Headers"} data={HeaderData} setData={SetHeaderData}/>
        </Box>
        <Box role="tabpanel" hidden={value !== 2} id={`simple-tabpanel-${2}`} aria-labelledby={`simple-tab-${2}`}>
           <JsonEditorPanel paneValue={paneValue} setPaneValue={setPaneValue}/>
        </Box>
        <Box role="tabpanel" hidden={value !== 3} id={`simple-tabpanel-${3}`} aria-labelledby={`simple-tab-${3}`}>
            <Tests/>
        </Box>
     </Box>
  );
}

export default SelectTab;