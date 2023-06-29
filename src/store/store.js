import { configureStore } from "@reduxjs/toolkit";
import aboutSlice from "./slices/aboutSlice";
import formsSlice from './slices/formsSlice'

const store = configureStore({
    reducer: {
        [aboutSlice.name]: aboutSlice.reducer,
        [formsSlice.name]: formsSlice.reducer,
    }
})

export default store