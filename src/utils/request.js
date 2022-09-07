import axios from 'axios';

const request = axios.create({
    baseURL: 'http://localhost:1211',
    headers: {
        'Content-type': 'application/json',
    },
});

export const get = async (path, option = []) => {
    const response = await request.get(path, option);
    return response.data;
};

export const post = async (path, data, config) => {
    const response = await request.post(path, data, config);
    return response.data;
};
