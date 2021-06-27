import { createSlice, CreateSliceOptions, PayloadAction, Slice } from "@reduxjs/toolkit";
import { Photo } from "../Models/photo";

const options: CreateSliceOptions = {
    name: 'photos',
    initialState: [],
    reducers: {
        getPhotos: (state: Photo[], action: PayloadAction<any>) => {
            return [...action.payload];
        }
    }
}

const photosSlice: Slice = createSlice(options);

export const { getPhotos } = photosSlice.actions;

export default photosSlice.reducer;