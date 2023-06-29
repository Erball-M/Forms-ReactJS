import { configureStore } from "@reduxjs/toolkit";
import aboutSlice from "./slices/aboutSlice";
import formsSlice from './slices/formsSlice'

const store = configureStore({
    reducer: {
        about: aboutSlice,
        forms: formsSlice,
    }
})

export default store