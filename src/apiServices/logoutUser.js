import { logOutFailed, logOutStart, logOutSuccess } from '../redux/userSlice';

const logOutUser = async (dispath, navigate, accessToken, interceptAxios) => {
    dispath(logOutStart());
    try {
        const res = await interceptAxios.get('/user/logout', {
            headers: {
                token: `Bearer ${accessToken}`,
            },
        });

        localStorage.removeItem('refresh_token');

        dispath(logOutSuccess());
        navigate('/vi/login');
    } catch (error) {
        console.log(error);
        dispath(logOutFailed());
    }
};

export default logOutUser;
