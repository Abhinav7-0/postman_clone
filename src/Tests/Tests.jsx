import { Typography, Box, Paper, Grid, Container } from "@material-ui/core"
import ScienceRoundedIcon from '@mui/icons-material/ScienceRounded';
import { useState } from "react";
import CreateUserTests from "./User Tests/CreateUserTests";
import DisplayTests from "./User Tests/DisplayTests";

const styles = {
    contain: {
        border: '3px solid rgba(128, 168, 168,1)',
        marginTop: '20px',
        padding: '20px 0px',
        width: '100%',
        borderRadius: '8px',
    },
    font: {
        fontWeight: 'bold',
        color: 'rgba(0, 0, 0, 0.15)',
    }
}

//marginTop: 10, overflow:'auto', border: '3px solid rgba(128, 168, 168,1)'

const Tests = () => {
    const [tests, setTests] = useState([]);

    const handleFormSubmit = (formData) => {
        // Add the form data to the tests array
        setTests([...tests, formData]);
      };

    const handleDelete = (index) => {
        // Create a copy of the tests array
        const updatedTests = [...tests];
        
        // Remove the element at the specified index
        updatedTests.splice(index, 1);

        // Update the state with the modified array
        setTests(updatedTests);
    };

    
    return(
        <Box>
            <Typography>
                <h3 style= {{ margin: '18px'}}>Tests</h3>
            </Typography>
            <Container component={Paper} maxWidth="lg" style={styles.contain}>
                <CreateUserTests onSubmit={handleFormSubmit} />
            </Container>
            <Container component={Paper} maxWidth="lg" style={styles.contain}>
                <DisplayTests tests={tests} onDelete={handleDelete} />
            </Container>
        </Box>
    )
}

export default Tests;