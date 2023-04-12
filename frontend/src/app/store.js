import { configureStore } from "@reduxjs/toolkit";
import authUserReducer from "../features/auth/authUser/authUserSlice";
import videoReducer from "../features/videos/videoSlice";
import taleReducer from "../features/tales/taleSlice";
export const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    Videos: videoReducer,
    Tales: taleReducer,
  },
});
