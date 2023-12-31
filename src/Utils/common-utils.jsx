/* eslint-disable dot-location */
/* eslint-disable no-useless-escape */

const checkValidJson = (text) => {
    if (/^[\],:{}\s]*$/.test(text.replace(/\\["\\\/bfnrtu]/g, '@').
        replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
        replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
            return true;
    }else{
        return false;
    }
}

export const checkParams = (formData, jsonText, paramData, headerData, setErrorMsg) => {

    if(!formData.url) {
        setErrorMsg('Request URL is empty!');
        return false;
    }

    if(!checkValidJson(jsonText)) {
        setErrorMsg('Text is not valid json');
        return false;
    }
    
    return true;
}


export const getHeadersAndParams = (objArr) => {
    console.log('getHeadersAndParams function is called');
    
    let obj = {};
    console.log("ObjArr", objArr);
    
    if (objArr && Array.isArray(objArr)) {
        objArr.forEach(data => {
            if (data.hasOwnProperty('check') && data.check) {
                obj = { ...obj, [data.key]: data.value };
            }
        });
    }else{
        console.log('error'); 
    }

    return obj;
}
