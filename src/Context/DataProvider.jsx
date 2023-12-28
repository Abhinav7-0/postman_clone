import React, { createContext, useState } from 'react';

export const DataContext = createContext(null);

const DataProvider = ({children}) => {

    const [formData, setFormData] = useState({url: '', type: 'GET'})
    const [ParamData, SetParamData] =  useState([]);
    const [HeaderData, SetHeaderData] = useState([]);
    const [jsonText, setjsonText] = useState('');

    console.log('jsonText in DataProvider:', jsonText);

    return (
        <DataContext.Provider value={{
            formData,
            setFormData,
            ParamData, 
            SetParamData,
            HeaderData,
            SetHeaderData,
            jsonText,
            setjsonText
        }}>
           {children}
        </DataContext.Provider>
    )
}

export default DataProvider;