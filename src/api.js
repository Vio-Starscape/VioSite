import axios from 'axios';

export const createApiInstance = (apiKey) => {
    return axios.create({
        baseURL: "https://api.vio.er-ic.ca/v1",
        headers: {
            "x-api-key": apiKey
        },
    });
};
