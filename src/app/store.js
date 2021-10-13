import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../modules/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
