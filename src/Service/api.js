export const fetchData = async (url, method, data, params, headers) => {
    const requestOptions = {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: method !== 'GET' ? JSON.stringify(data) : null,
    };
  
    let apiUrl = url;
  
    // Append query parameters to the URL if available
    if (params) {
      const queryString = new URLSearchParams(params).toString();
      apiUrl += `?${queryString}`;
    }
  
    try {
      const response = await fetch(apiUrl, requestOptions);
      const result = await response.json();
      return result;
    } catch (error) {
      console.error(`Error in fetchData for ${method} ${url}:`, error);
      throw error;
    }
  };
  