import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "../reducers/userReducer";

// configureStore will set up the Redux Store for us!

const bigReducer = combineReducers({
  user: userReducer,
});

const store = configureStore({
  reducer: bigReducer,
});

export default store;
