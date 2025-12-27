import { createSlice } from "@reduxjs/toolkit";

const initialFormData = {
    userName: "",
    password: ""
}

const formData = createSlice({
    name: 'formData',
    initialState: initialFormData,
    reducers: {
        userNameOnChange(state, action){
            state.userName = action.payload;
        },
        passwordOnChange(state, action){
            state.password = action.payload;
        }
    }
});

export const formDataAction = formData.actions;

export default formData.reducer;