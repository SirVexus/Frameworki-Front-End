import { createSlice, CreateSliceOptions, PayloadAction, Slice } from "@reduxjs/toolkit";
import { Post } from "../Models/post";

const options: CreateSliceOptions = {
    name: 'posts',
    initialState: [],
    reducers: {
        getPosts: (state: Post[], action: PayloadAction<any>) => {
            return [...action.payload];
        }
    }
}

const postsSlice: Slice = createSlice(options);

export const { getPosts } = postsSlice.actions;

export default postsSlice.reducer;