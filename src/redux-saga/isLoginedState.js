import {createSlice} from "@reduxjs/toolkit";

export const isLoginSlice = createSlice({
    name: "isLogin", initialState: {
        isLogin: true
    }, reducers: {
        setIsLogin: (state, action) => {
            state.isLogin = action.payload;
        },
    },
});

export const {setIsLogin} = isLoginSlice.actions;

export default isLoginSlice.reducer;