import { Box, Tabs, Tab } from "@mui/material";
import { useState } from "react";
import { makeStyles } from "@mui/styles";

//components 
import CreateTable from "./CreateTable";
import JsonEditorPanel from "./JsonEditor";

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

    const handleChange = (event, newValue) => {
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
           <CreateTable text="Query Params"/>
        </Box>
        <Box role="tabpanel" hidden={value !== 1} id={`simple-tabpanel-${1}`} aria-labelledby={`simple-tab-${1}`}>
           <CreateTable text="Headers"/>
        </Box>
        <Box role="tabpanel" hidden={value !== 2} id={`simple-tabpanel-${2}`} aria-labelledby={`simple-tab-${2}`}>
           <JsonEditorPanel paneValue={paneValue} setPaneValue={setPaneValue}/>
        </Box>
        <Box role="tabpanel" hidden={value !== 3} id={`simple-tabpanel-${3}`} aria-labelledby={`simple-tab-${3}`}>
        </Box>
     </Box>
  );
}

export default SelectTab;