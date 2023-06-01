import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    isAuthenticated: false,
    user: null,
    message: null,
    error: null,
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        loadUserRequest: (state) => {
            state.loading = true;
        },
        loadUserSuccess: (state, action) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.user = action.payload.user;
        },
        loadUserFailure: (state , action) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.error = action.payload;
        },
    }
})

export const { loadUserRequest , loadUserFailure , loadUserSuccess } = userSlice.actions;

export default userSlice.reducer;