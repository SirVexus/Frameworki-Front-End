import { createSlice, CreateSliceOptions, PayloadAction, Slice } from "@reduxjs/toolkit";

export interface SelectedData {
    name: string,
    type: string
}

const options: CreateSliceOptions = {
    name: 'selectedData',
    initialState: {
        name: '',
        type: ''
    },
    reducers: {
        setSelectedData: (state: SelectedData, action: PayloadAction<any>) => {
            return [...action.payload];
        }
    }
}

const selectedDataSlice: Slice = createSlice(options);

export const { setSelectedData } = selectedDataSlice.actions;

export default selectedDataSlice.reducer;