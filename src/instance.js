import axios from 'axios';

export const instance = axios.create({
    baseURL: "http://localhost:5567/api",
    headers: {
        Authorization: `Bearer ${localStorage.getItem('vio-token')}`,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
    },
});