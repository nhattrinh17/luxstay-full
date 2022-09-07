import { loginFailed, loginStart, loginSuccess } from '../redux/userSlice';
import * as request from '../utils/request';

const loginUser = async (user, dispatch, navigate) => {
    dispatch(loginStart());
    try {
        const res = await request.post('/user/login', user);
        const { refreshToken, ...dataUser } = res;
        localStorage.setItem('refresh_token', refreshToken);
        dispatch(loginSuccess(dataUser));
        navigate('/vi');
    } catch (error) {
        dispatch(loginFailed());
    }
};

export default loginUser;
