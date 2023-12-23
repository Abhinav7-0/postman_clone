export const fetchData = async (url, method, data, params, headers) => {
  const requestOptions = {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body: method !== ('GET' || 'DELETE') ? JSON.stringify(data) : null,
  };
  
  let apiUrl = url;

  // Append query parameters to the URL if available
  if (params) {
    const queryString = new URLSearchParams(params).toString();
    apiUrl += `?${queryString}`;
    console.log(apiUrl)
  }

  try {
    const response = await fetch(apiUrl, requestOptions);

    // Extract HTTP status code from the response
    const statusCode = response.status;

    // Parse the response body
    const result = await response.json();

    // Assuming responseData contains the actual data from the response
    return { status: statusCode, data: result };
  } catch (error) {
    console.error(`Error in fetchData for ${method} ${url}:`, error);
    throw error;
  }
};
  