import { configureStore } from "@reduxjs/toolkit";
import dashboardSlice from "../slices/Dashboard";

export const appStore = configureStore({
    reducer:{
        dashboard:dashboardSlice.reducer
    }
})