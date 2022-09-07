import * as request from '../utils/request';

const getRoomByPlace = async (place, page = 0, sorttype) => {
    try {
        let path = `/room/?place=${place}`;
        if (sorttype) {
            path += ` &type=${sorttype} `;
        }
        path += `&page=${page}`;
        const res = request.get(path);
        return res;
    } catch (error) {
        console.log(error);
    }
};

export default getRoomByPlace;
