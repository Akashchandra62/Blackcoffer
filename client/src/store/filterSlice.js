import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    end_year: [],
    topic: [],
    sector: [],
    region: [],
    pestle: [],
    source: [],
    country: [],

};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        update(state, action){ 
            return action.payload;
        }
    }
})


export const { update } = filterSlice.actions;
export default filterSlice.reducer;