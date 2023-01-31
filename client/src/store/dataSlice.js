import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    data: [],
    filterData: []
};

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        add(state, action){ 
            state['data'] = action.payload;
        },
        updateFilterData(state, action){
            state['filterData'] = action.payload;
        }
    }
})


export const { add, updateFilterData } = dataSlice.actions;
export default dataSlice.reducer;