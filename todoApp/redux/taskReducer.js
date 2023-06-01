import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    message: null,
    error: null,
}

const messageSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        addTaskRequest: (state) => {
            state.loading = true;
        },
        addTaskSuccess: (state , action) => {
            state.loading = false;
            state.message = action.payload;
        },
        addTaskFailure: (state , action) => {
            state.loading = false;
            state.error = action.payload;
        },
        updateTaskRequest: (state) => {
            state.loading = true;
        },
        updateTaskSuccess: (state , action) => {
            state.loading = false;
            state.message = action.payload;
        },
        updateTaskFailure: (state , action) => {
            state.loading = false;
            state.error = action.payload;
        },
        deleteTaskRequest: (state) => {
            state.loading = true;
        },
        deleteTaskSuccess: (state , action) => {
            state.loading = false;
            state.message = action.payload;
        },
        deleteTaskFailure: (state , action) => {
            state.loading = false;
            state.error = action.payload;
        },
        updateProfileRequest: (state) => {
            state.loading = true;
        },
        updateProfileSuccess: (state , action) => {
            state.loading = false;
            state.message = action.payload;
        },
        updateProfileFailure: (state , action) => {
            state.loading = false;
            state.error = action.payload;
        },
        updatePasswordRequest: (state) => {
            state.loading = true;
        },
        updatePasswordSuccess: (state , action) => {
            state.loading = false;
            state.message = action.payload;
        },
        updatePasswordFailure: (state , action) => {
            state.loading = false;
            state.error = action.payload;
        },
        forgetPasswordRequest: (state) => {
          state.loading = true;
        },
        forgetPasswordSuccess: (state, action) => {
          state.loading = false;
          state.message = action.payload;
        },
        forgetPasswordFailure: (state, action) => {
          state.loading = false;
          state.error = action.payload;
        },
        resetPasswordRequest: (state) => {
          state.loading = true;
        },
        resetPasswordSuccess: (state, action) => {
          state.loading = false;
          state.message = action.payload;
        },
        resetPasswordFailure: (state, action) => {
          state.loading = false;
          state.error = action.payload;
        },        
        clearError: (state) => {
            state.error = null;
        },
        clearMessage: (state) => {
        state.message = null;
        },
    }
})

export const { addTaskFailure,
    addTaskRequest,
    addTaskSuccess,
    updateTaskFailure,
    updateTaskSuccess,
    updateTaskRequest,
    deleteTaskRequest,
    deleteTaskSuccess,
    deleteTaskFailure,
    updatePasswordFailure,
    updatePasswordRequest,
    updatePasswordSuccess,
    updateProfileFailure,
    updateProfileRequest,
    updateProfileSuccess,
    resetPasswordFailure,
    resetPasswordRequest,
    resetPasswordSuccess,
    forgetPasswordFailure,
    forgetPasswordRequest,
    forgetPasswordSuccess,
    clearError,
    clearMessage } = messageSlice.actions;

export default messageSlice.reducer;