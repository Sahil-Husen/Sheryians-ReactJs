import { configureStore } from "@reduxjs/toolkit";
 import counterReducer from '../Features/Counter/CounterSlice.js'

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
