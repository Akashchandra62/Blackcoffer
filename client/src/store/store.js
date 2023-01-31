import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./dataSlice"
import filterReducer from "./filterSlice"


const store = configureStore({
    reducer: {
        data: dataReducer,
        filter: filterReducer
    }
})

export default store;