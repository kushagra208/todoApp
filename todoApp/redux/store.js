import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./authReducer.js";
import taskReducer from "./taskReducer.js";

const store = configureStore({
    reducer: {
        auth: authReducer,
        message: taskReducer,
    },
});



export default store;