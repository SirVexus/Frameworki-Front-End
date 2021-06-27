import { createSlice, CreateSliceOptions, PayloadAction, Slice } from "@reduxjs/toolkit";

const options: CreateSliceOptions = {
    name: 'comments',
    initialState: [],
    reducers: {
        getComments: (state: Comment[], action: PayloadAction<any>) => {
            return [...action.payload];
        }
    }
}

const commentsSlice: Slice = createSlice(options);

export const { getComments } = commentsSlice.actions;

export default commentsSlice.reducer;

