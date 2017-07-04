import axios from 'axios';

const BASE_URL = process.env.BASE_URL || 'http://localhost:3001/';

function preProcessOptions(options) {
  // const token = localStorage.getItem('token');
  const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiI4ZWFiY2NmNmU2ZjU0MGJjODIwNTRjNmE2YjdkOGU1ZCIsInN1YiI6InVubi1ldSJ9.05e_5y6t0Urt3Qi882mSjYHXjWUbi0mhILDiEbvDdss';
  const headers = {
    Authorization: `Bearer ${token}`,
    Accept: 'application/json',
  };

  return {
    headers,
    baseURL: BASE_URL,
    ...options,
  };
}

export async function request(method, url, options) {
  try {
    const response = await axios.request(preProcessOptions({ method, url, ...options }));
    return response.data;
  } catch (error) {
    const { status, data } = error.response;
    if (status === 401 || status === 403) {
      localStorage.removeItem('token');
      window.location = '/users/sign_out';
    }
    alert(data.message || 'Something went wrong');
    throw new Error(data.message);
  }
}

export default {
  get: request.bind(this, 'get'),
  post: request.bind(this, 'post'),
  put: request.bind(this, 'put'),
  del: request.bind(this, 'delete'),
};

