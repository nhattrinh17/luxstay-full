import { createSlice } from '@reduxjs/toolkit';

export const placeSlice = createSlice({
    name: 'place',
    initialState: {
        getAllPlace: {
            currentAllPlace: null,
            isFetching: false,
            error: false,
        },
    },
    reducers: {
        getAllPlaceStart: (state) => {
            state.getAllPlace.isFetching = true;
        },
        getAllPlaceSuccess: (state, action) => {
            state.getAllPlace.isFetching = false;
            state.getAllPlace.currentAllPlace = action.payload;
            state.getAllPlace.error = false;
        },
        getAllPlaceFailed: (state) => {
            state.getAllPlace.isFetching = false;
            state.getAllPlace.error = true;
        },
    },
});

export const { getAllPlaceStart, getAllPlaceSuccess, getAllPlaceFailed } = placeSlice.actions;

export default placeSlice.reducer;
