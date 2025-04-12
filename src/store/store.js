import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./taskSlice"; // make sure this exists or comment it out for now

export const store = configureStore({
  reducer: {
    task: taskReducer,
    // Add more slices here as your app grows
  },
});
