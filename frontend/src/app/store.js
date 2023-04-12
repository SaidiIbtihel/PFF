import { configureStore } from "@reduxjs/toolkit";
import authUserReducer from "../features/auth/authUser/authUserSlice";

export const store = configureStore({
  reducer: {
    authUser: authUserReducer,
  },
});
