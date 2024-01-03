import { Box, Container, Tab, Tabs, TextField, Typography, Button, MenuItem } from "@mui/material";
import { makeStyles } from '@mui/styles';
import { useState } from "react";

const useStyles = makeStyles({
    tab: {
        textTransform: ['none', '!important'],
        '&::active': {
            border: '1px solid #fff'
        }
    }
})

const TestsValue = [
  {
    value: 'Greater Then (>)',
    label: '>',
  },
  {
    value: 'Less Then (<)',
    label: '<',
  },
  {
    value: 'Greater Then equal to (>=)',
    label: '>=',
  },
  {
    value: 'Less Then equal to (<=)',
    label: '<=',
  },
  {
    value: 'equals to (==)',
    label: '=='
  },
  {
    value: 'Length Check',
    label: 'Length Check'
  }
]

const CreateUserTests = ({ onSubmit }) => {
    const classes = useStyles();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    //<---------Check status code Form----------->
    const [statusFormData, setStatusFormData] = useState({
      type: 'status',
      code: null,
      message: '',
    });

    const statusFormHandleChange = (e) => {
      setStatusFormData({ ...statusFormData, [e.target.name]: e.target.value });
    };

    const statusFormClear = () => {
      setStatusFormData({type: 'status', key: '', value: '', message: ''});
    }

    const statusHandleSubmit = (e) => {
      e.preventDefault();
  
      // Check if both code and message fields are filled
      if (statusFormData.code === null || statusFormData.message.trim() === '') {
        alert('Please fill in all fields');
        return;
      }
      
      onSubmit(statusFormData);
      statusFormClear();
    };

    //<---------Check key-value Form----------->
    const [KeyValFormData, setKeyValFormData] = useState({
      type: 'key-value',
      key: '',
      value: '',
      message: '',
    });
 
    const KeyValFormHandleChange = (e) => {
      setKeyValFormData({ ...KeyValFormData, [e.target.name]: e.target.value });
    };
 
    const KeyValFormClear = () => {
      setKeyValFormData({type: 'key-value', key: '', value: '', message: ''});
    }
 
    const KeyValHandleSubmit = (e) => {
      e.preventDefault();
 
      // Check if both code and message fields are filled
      if (KeyValFormData.key === '' || KeyValFormData.message.trim() === '') {
        alert('Please fill in Attribute and Message');
        return;
      }
 
      onSubmit(KeyValFormData);
      KeyValFormClear();
    };

    return(
        <Container maxWidth="lg">
            <Tabs value={value} onChange={handleChange}
                TabIndicatorProps={{ sx: {  backgroundColor: "#9c27b0", height: 4, bottom: 2} }} 
                textColor="none">
                <Tab label="Check Status" className={classes.tab} />
                <Tab label="Key-value" className={classes.tab} />
            </Tabs>

            {/*------Checking Status tab Form-----------*/}
            <Box 
                role="tabpanel"
                hidden={value !== 0}
                id={`simple-tabpanel-${0}`}
                aria-labelledby={`simple-tab-${0}`}
            >
              <Typography style={{ marginTop: '20px' }}>Check Status</Typography>

              <TextField 
                  label="Status Code" 
                  name="code"
                  value={statusFormData.code}
                  onChange={statusFormHandleChange}
                  fullWidth margin="normal" />
              <TextField 
                  label="Enter Message" 
                  name="message"
                  value={statusFormData.message}
                  onChange={statusFormHandleChange}
                  fullWidth margin="normal" />

              <Button 
                variant="contained" 
                size="small" 
                style={{ marginTop: '10px', width:100, height: 40, fontSize: 14 }} 
                onClick={statusHandleSubmit}
              >
                Create
              </Button>
            </Box>

            {/*------Checking by Key Value pair Form-----------*/}
            <Box
                role="tabpanel"
                hidden={value !== 1}
                id={`simple-tabpanel-${1}`}
                aria-labelledby={`simple-tab-${1}`}
            >
              <Typography style={{ marginTop: '20px' }}>Check by key value</Typography>
       
              <TextField
                name="key"
                value={KeyValFormData.key}
                onChange={KeyValFormHandleChange}
                label="Attribute"
                fullWidth margin="normal" />
              <TextField
                name="value"
                value={KeyValFormData.value}
                onChange={KeyValFormHandleChange}
                label="Expected Value"
                fullWidth margin="normal" />
              
              <TextField
              name="TestScenario"
              value={KeyValFormData.TestScenario}
              id="outlined-select-currency"
              select
              label="Select"
              helperText="Please select your Test Scenario"
              fullWidth 
              margin="normal"
              onChange={KeyValFormHandleChange}
              >
              {TestsValue.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
              </TextField>
              
              <TextField
                name="message"
                value={KeyValFormData.message}
                onChange={KeyValFormHandleChange}
                label="Message"
                fullWidth margin="normal" />
         
              <Button
                variant="contained"
                size="small"
                style={{ marginTop: '10px', width:100, height: 40, fontSize: 14 }} 
                onClick={KeyValHandleSubmit}
              >
                Create
              </Button>
            </Box>
      </Container>
    )

}

export default CreateUserTests;


