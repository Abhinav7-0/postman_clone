import { Paper } from "@mui/material";
import { useEffect, useState } from "react";

const styles = {
    pass: {
        display: 'inline-block',
        padding: '5px',
        backgroundColor: '#9ADE7B',
        color: 'white',
        borderRadius: '4px',
        fontSize: '12px',
    },

    fail: {
        display: 'inline-block',
        padding: '1px',
        backgroundColor: '#D83A56',
        color: 'white',
        borderRadius: '4px',
        fontSize: '12px',
    },
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

const TestResults = ({ status, data }) => {

    console.log('Response Data:', data)

    // Creating Default test cases:
    const [validRequest, setValidRequest] = useState(false);
    const [empty, setEmpty] = useState(true);
    const [testResultsArr, setTestResultsArr] = useState([]);

    useEffect(() => {
        setValidRequest(status < 400);
        setTestResultsArr([]); // Clear the array
    
        // Default Test case: 0
        const defaultTestCase0 = validRequest
            ? <p style={{ padding: '10px' }} key={0}>Default Test case 0: <span style={styles.pass}>Pass</span> : Valid Request Sent</p>
            : <p style={{ padding: '10px' }} key={0}>Default Test case 0: <span style={styles.fail}>Failed</span> : Invalid Request Sent</p>;
    
        // Default Test case: 1
        const allAttributesNotEmpty = checkAttributesNotEmpty(data);
        console.log('allAttributesNotEmpty:', allAttributesNotEmpty);
        
        const defaultTestCase1 = allAttributesNotEmpty
            ? <p style={{ padding: '10px' }} key={1}>Default Test case 1: <span style={styles.pass}>Pass</span> : No Empty or null value found</p>
            : <p style={{ padding: '10px' }} key={1}>Default Test case 1: <span style={styles.fail}>Failed</span> : Empty or null value found</p>;
    
        // Use a callback function when updating state based on the current state
        setTestResultsArr(prevResults => [...prevResults, defaultTestCase0, defaultTestCase1]);
    
    }, [status, data, validRequest]);
    

    return (
        <>
            <Paper style={{marginTop: 20, overflow: 'auto', border: '3px solid rgba(128, 168, 168,1)', backgroundColor: '#FFFFFF', borderRadius: 8 }}>
                {testResultsArr.map(html => html)}
            </Paper>
        </>
    );
}

export default TestResults;