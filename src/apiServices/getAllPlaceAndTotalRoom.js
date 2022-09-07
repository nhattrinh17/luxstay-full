import { getAllPlaceFailed, getAllPlaceStart, getAllPlaceSuccess } from '../redux/placeSlice';
import * as request from '../utils/request';

const getAllPlaceAndTotalRoom = async (dispatch) => {
    dispatch(getAllPlaceStart);
    try {
        const res = await request.get('/place');

        dispatch(getAllPlaceSuccess(res));
    } catch (error) {
        dispatch(getAllPlaceFailed);
        console.log(error);
    }
};

export default getAllPlaceAndTotalRoom;
