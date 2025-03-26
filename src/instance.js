import axios from 'axios';

const baseURL = process.env.NODE_ENV === 'development'
  ? 'http://localhost:5567/api'
  : window.location.hostname.includes('v-io.info')
    ? 'https://v-io.info/api'
    : 'https://vio.er-ic.ca/api';

export const instance = axios.create({
    baseURL: baseURL,
    headers: {
        Authorization: `Bearer ${localStorage.getItem('vio-token')}`,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
    },
});

