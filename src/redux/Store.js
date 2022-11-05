import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./slices/UserSlice";

const store = configureStore({
  reducer: {
    users: UserReducer,
  },
});

export default store;
