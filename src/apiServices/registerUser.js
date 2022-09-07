import { registerStart, registerSuccess, registerFailed } from '../redux/userSlice';
import * as request from '../utils/request';

const registerUser = async (user, dispatch, navigate) => {
    dispatch(registerStart());
    try {
        const res = await request.post('/user/rerister', user);
        dispatch(registerSuccess(res));
        navigate('/vi');
    } catch (error) {
        dispatch(registerFailed());
    }
};

export default registerUser;
