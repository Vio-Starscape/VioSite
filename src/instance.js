import axios from 'axios';

export const instance = axios.create({
    baseURL: "https://vio.er-ic.ca/api",
    headers: {
        Authorization: `Bearer ${localStorage.getItem('vio-token')}`,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
    },
});

