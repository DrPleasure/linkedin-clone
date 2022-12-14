import { configureStore, combineReducers } from "@reduxjs/toolkit";
import experienceReducer from "../reducers/experienceReducer";
import userReducer from "../reducers/userReducer";

// configureStore will set up the Redux Store for us!

const bigReducer = combineReducers({
  user: userReducer,
  experience: experienceReducer,
});

const store = configureStore({
  reducer: bigReducer,
});

export default store;
