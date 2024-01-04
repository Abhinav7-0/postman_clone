import { Paper, Typography } from "@mui/material";
import { useEffect, useState} from "react";

const styles = {
    pass: {
        display: 'inline-block',
        padding: '5px',
        color: '#147800',
        borderRadius: '4px',
        fontSize: '16px',
        fontWeight:"bold"
    },
    passTypo: {
        padding: '5px',
        color: '#147800',
        borderRadius: '4px',
        fontSize: '16px',
        fontWeight:"bold"
    },
    fail: {
        display: 'inline-block',
        padding: '5px',
        color: '#D83A56',
        borderRadius: '4px',
        fontSize: '16px',
        fontWeight:"bold"
    },
    failTypo: {
        padding: '5px',
        color: '#D83A56',
        borderRadius: '4px',
        fontSize: '16px',
        fontWeight:"bold"
    },
    title: {
        marginBottom: '10px',
        marginTop: '10px',
        fontSize: '1.3rem',
        fontWeight: 'bold',
    },
    container: {
        padding: '5px',
    }
}

// Checking for empty or null values
const checkAttributesNotEmpty = (jsonObj) => {
    console.log('Checking attributes:', jsonObj);

    // Check if the object is empty
    if (Object.keys(jsonObj).length === 0) {
        console.log('Empty object');
        return false;
    }

    for (const key in jsonObj) {
        if (jsonObj.hasOwnProperty(key)) {
            const value = jsonObj[key];
            console.log(`${key}: ${value}`);
            if (value === null || (typeof value === 'string' && value.trim() === '')) {
                return false;
            }
        }
    }
    return true;
};

const TestResults = ({ status,data, tests }) => {

    console.log('Response Data:', data)
    console.log('tests Data', tests)

    // Creating Default test cases:
    const [validRequest, setValidRequest] = useState(false);
    const [testResultsArr, setTestResultsArr] = useState([]);

    useEffect(() => {
        setValidRequest(status < 400);
        setTestResultsArr([]); // Clear the array
    
        // Default Test case: 0
        const defaultTestCase0 = validRequest
            ? <Typography style={styles.passTypo} key={0}>Test case 1: <span style={styles.pass}>Pass</span> : Valid Request Sent</Typography>
            : <Typography style={styles.failTypo} key={0}>Test case 1: <span style={styles.fail}>Failed</span> : Invalid Request Sent</Typography>;
    
        // Default Test case: 1
        const allAttributesNotEmpty = checkAttributesNotEmpty(data);
        console.log('allAttributesNotEmpty:', allAttributesNotEmpty);
        
        const defaultTestCase1 = allAttributesNotEmpty
            ? <Typography style={styles.passTypo} key={1}>Test case 2: <span style={styles.pass}>Pass</span> : No Empty or null value found</Typography>
            : <Typography style={styles.failTypo} key={1}>Test case 2: <span style={styles.fail}>Failed</span> : Empty or null value found</Typography>;
    
        // Use a callback function when updating state based on the current state
        setTestResultsArr(prevResults => [...prevResults, defaultTestCase0, defaultTestCase1]);
    }, [status, data, validRequest, tests]); 


    

    return (
        <>
            <Paper style={{marginTop: 20, overflow: 'auto', border: '3px solid rgba(128, 168, 168,1)', backgroundColor: '#FFFFFF', borderRadius: 8}}>
                <div style={styles.container}>
                    <Typography style={styles.title}>Default Test Results</Typography>
                    {testResultsArr.map(html => html)}
                </div>
            </Paper>
        </>
    );
}

export default TestResults;