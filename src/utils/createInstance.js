import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { post } from './request';

export const callRefreshToken = async (refreshToken) => {
    try {
        const res = await post('/user/refresh', { refreshToken: refreshToken });
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const createAxios = (user, dispatch, stateSuccess) => {
    let newInstance = axios.create({
        baseURL: 'http://localhost:1211',
    });

    newInstance.interceptors.request.use(
        async (config) => {
            let date = new Date();
            let refreshTokenOld = localStorage.getItem('refresh_token');
            const decodeToken = jwt_decode(user?.accessToken);
            if (decodeToken.exp < date.getTime() / 1000) {
                const data = await callRefreshToken(refreshTokenOld);
                const { accessToken, refreshToken } = data;
                const refeshUser = {
                    ...user,
                    accessToken: accessToken,
                };
                localStorage['refresh_token'] = refreshToken;

                dispatch(stateSuccess(refeshUser));
                config.headers['token'] = `Bearer ${data.accessToken}`;
            }
            return config;
        },
        (error) => Promise.reject(error),
    );

    return newInstance;
};
