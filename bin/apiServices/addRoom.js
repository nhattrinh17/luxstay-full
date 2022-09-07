import * as request from '../utils/request';

const addRoom = async (path, formData, accessToken) => {
    try {
        const res = await request.post(path, formData, {
            headers: {
                token: `Bearer ${accessToken}`,
            },
        });

        return res;
    } catch (error) {
        console.log(error.message);
    }
};

export default addRoom;
