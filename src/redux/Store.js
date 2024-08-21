import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./main.js";

export default configureStore({
  reducer: {
    todos: todoReducer,
  },
});
