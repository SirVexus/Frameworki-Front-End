import { createSlice, CreateSliceOptions, PayloadAction, Slice } from "@reduxjs/toolkit";
import { User } from "../Models/User";

const options: CreateSliceOptions = {
    name: 'users',
    initialState: [],
    reducers: {
        getUsers: (state: User[], action: PayloadAction<any>) => {
            return [...action.payload];
        }
    }
}

const usersSlice: Slice = createSlice(options);

export const { getUsers } = usersSlice.actions;

export default usersSlice.reducer;