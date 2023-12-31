import {createSlice} from "@reduxjs/toolkit";

export const usersSlice = createSlice({
    name: "users", initialState: {
        users: [], error: "", isLoading: false,
    }, reducers: {
        getUsersFetch: (state) => {
            state.isLoading = true;
        }, getUsersSuccess: (state, action) => {
            state.users = action.payload;
            state.isLoading = false;
        }, getUsersFailure: (state) => {
            state.error = "Error"
            state.isLoading = false;
        }
    },
});

export const {getUsersFetch, getUsersSuccess, getUsersFailure} = usersSlice.actions;

export default usersSlice.reducer;