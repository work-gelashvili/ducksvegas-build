import { configureStore } from "@reduxjs/toolkit";
import userData from "./userData";
import formData from "./formData";
import GlobalVariables from "./GlobalVariables";

const store = configureStore({
  reducer: {
    formData,
    userData,
    GlobalVariables,
  },
});

export default store;
