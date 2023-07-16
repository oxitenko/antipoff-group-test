import {createSlice} from '@reduxjs/toolkit';

const signUpSlice = createSlice({
    name: "signup", initialState: {
        name: "", email: "", password: "", confirm: "", fieldErrors: {}
    }, reducers: {
        setUpdateFields: (state, action) => {
            state[action.payload.field] = action.payload.value;
        },

        setFieldError: (state, action) => {
            const {field, error} = action.payload;
            state.fieldErrors[field] = error;
        }, clearFieldError: (state, action) => {
            const {field} = action.payload;
            delete state.fieldErrors[field];
        },

        resetForm: (state) => {
            state.name = '';
            state.email = '';
            state.password = '';
            state.confirm = "";
            state.fieldErrors = {};
        },
    }
});

export const {setUpdateFields, setFieldError, clearFieldError, resetForm} = signUpSlice.actions;
export default signUpSlice.reducer;