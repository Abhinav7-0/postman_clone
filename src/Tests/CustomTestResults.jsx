/* eslint-disable no-eval */
import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "../Context/DataProvider";
import { Paper, Typography } from "@mui/material";

const styles = {
    container: {
        padding: '5px',
    },

    title: {
        marginBottom: '10px',
        fontSize: '1.3rem',
        marginTop: '10px',
        fontWeight: 'bold',
    },

    list: {
        listStyleType: 'none',
        padding: 0,
    },

    listItem: (value) => ({
        padding: '5px',
        marginBottom: '5px',
        color: value === 'passed' ? '#147800' : '#D83A56',
        borderRadius: '3px',
        fontWeight:"bold"
    }),
};

export default function CustomTestResults({ response }) {
    const { testJson } = useContext(DataContext);
    const [testResults, setTestResults] = useState({});

    console.log(testJson);
    console.log(response);

    useEffect(() => {
        if (testJson) {
            try {
                const conditions = JSON.parse(testJson);
                const results = {};
                Object.keys(conditions).forEach((key) => {
                    try {
                        const evaluation = eval(conditions[key]);
                        results[key] = evaluation ? 'passed' : 'failed';
                    } catch (error) {
                        results[key] = 'error';
                        console.error(`Error evaluating condition ${key}:`, error);
                    }
                });

                setTestResults(results);
            } catch (error) {
                console.error('Error parsing testJson:', error);
            }
        }
    }, [testJson, response]);

    return (
        <Paper style={{ marginTop: 20, overflow: 'auto', border: '3px solid rgba(128, 168, 168,1)', backgroundColor: '#FFFFFF', borderRadius: 8 }}>
            <div style={styles.container}>
                <Typography style={styles.title}>Custom Test Results</Typography>
                <ul style={styles.list}>
                    {Object.entries(testResults).map(([key, value]) => (
                        <li
                            key={key}
                            style={styles.listItem(value)}
                        >
                            <span>{key}</span>: {value}
                        </li>
                    ))}
                </ul>
            </div>
        </Paper>
    );
}
