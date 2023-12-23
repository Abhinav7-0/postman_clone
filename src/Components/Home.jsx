import { Box } from '@material-ui/core';
import { makeStyles } from '@mui/styles';
import { useContext, useState } from 'react';
import { DataContext } from '../Context/DataProvider';
import { checkParams } from '../Utils/common-utils';
import { fetchData } from '../Service/api';
import Header from './URL_NavBar/Header';
import Form from './URL_NavBar/Form';
import SelectTab from './Table/SelectTab';
import Response from './Response/Response';
import SnackBar from './Response/Snackbar';
import ErrorScreen from './Response/ErrorScreen';
import ResponseFooter from './Response/ResponseFooter';

const useStyles = makeStyles({
  component: {
    width: '60%',
    margin: '20px auto 0 auto',
  },
});

const Home = () => {
  const classes = useStyles();
  const [errorResponse, setErrorResponse] = useState(false);
  const [apiResponse, setApiResponse] = useState({});
  const { formData, jsonText, paramData, headerData } = useContext(DataContext);
  const [errorMsg, setErrorMsg] = useState('');
  const [error, setError] = useState(false);
  const [responseStats, setResponseStats] = useState({
    statusCode: null,
    responseSize: null,
    responseTime: null,
  });

  const onSendClick = async () => {
    try {
      // Check for valid parameters before making the request
      if (!checkParams(formData, jsonText, paramData, headerData)) {
        setError(true); // Set error state to true for showing the SnackBar
        setErrorMsg('Invalid URL'); // Set an appropriate error message
        return false;
      }
       
      const startTime = Date.now();
      const response = await fetchData(formData.url, formData.type, jsonText, paramData, headerData);
      const endTime = Date.now();
      const responseSize = JSON.stringify(response).length;
      console.log(response)

      setResponseStats({
        statusCode: response.status,
        responseSize,
        responseTime: endTime - startTime,
      });


      console.log('Response Stats:', responseStats); // Log the updated state
      
      setApiResponse(response);
    } catch (error) {
      console.error('Error occurred:', error);
      setErrorResponse(true);
    }
  };

  const onRetry = () => {
    setErrorResponse(false);
    setApiResponse({});
  };

  return (
    <>
      <Header />
      <Box className={classes.component}>
        <Form onSendClick={onSendClick} />
        <SelectTab />
        {errorResponse ? (
          <ErrorScreen onRetry={onRetry} />
        ) : (
          <Response data={apiResponse} />
        )}
        <ResponseFooter
          statusCode={responseStats.statusCode}
          responseSize={responseStats.responseSize}
          responseTime={responseStats.responseTime}
        />
      </Box>
      { error && <SnackBar errorMsg={errorMsg} error={error} setError={setError}/> }
    </>
  );
};

export default Home;
