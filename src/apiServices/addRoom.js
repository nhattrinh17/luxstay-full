const addRoom = async (navigate, formData, accessToken, interceptAxios) => {
    try {
        const res = await interceptAxios.post('/room/add', formData, {
            headers: {
                token: `Bearer ${accessToken}`,
            },
        });

        navigate('/vi/homestay/add');
        return res;
    } catch (error) {
        console.log(error);
    }
};

export default addRoom;
