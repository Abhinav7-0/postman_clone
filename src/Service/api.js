import axios from 'axios';
import { getHeadersAndParams } from '../Utils/common-utils';

export const fetchData = async (url, method, jsonText, ParamData, HeaderData) => {

    console.log('fetchData function is called');
    const apiType = method;
    const apiUrl = url;
    const apiHeaders = {
        'Content-Type': 'application/json',
        ...getHeadersAndParams(HeaderData),
    };
    const apiParams = getHeadersAndParams(ParamData);

    console.log('API Headers:', apiHeaders);
    console.log('API Params:', apiParams);

    try {
        const response = await axios({
            method: apiType,
            url: apiUrl,
            data: method !== 'GET' && method !== 'DELETE' ? jsonText : undefined,
            headers: apiHeaders,
            params: apiParams,
        });
        const result = response.data;
        const statusCode = response.status;
        return { status: statusCode, data: result };

    } catch (error) {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            return {
                status: error.response.status,
                data: error.response.data,
            };
        } else if (error.request) {
            // The request was made but no response was received
            console.error(`No response received for ${apiType} ${apiUrl}`);
            return {
                status: 500, // Internal Server Error
                error: 'No response received from the server.',
            };
        } else {
            // Something happened in setting up the request that triggered an Error
            console.error(`Error setting up request for ${apiType} ${apiUrl}`, error.message);
            return {
                status: 500, // Internal Server Error
                error: 'Error setting up the request.',
            };
        }
    }
};
