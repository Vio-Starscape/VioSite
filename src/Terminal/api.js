import axios from 'axios';

const baseURL = window.location.hostname.includes('v-io.info') ? 'https://api.v-io.info' : 'https://api.vio.er-ic.ca'

export const createApiInstance = (apiKey) => {
    const inst = axios.create({
        baseURL: baseURL + "/v1",
        headers: {
            "x-api-key": apiKey
        },
    });
    return inst;
};