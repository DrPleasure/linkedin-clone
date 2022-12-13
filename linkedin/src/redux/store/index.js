import { configureStore, combineReducers } from "@reduxjs/toolkit";
import articleReducer from "../reducers/articleReducer";
import userReducer from "../reducers/userReducer";
// configureStore will set up the Redux Store for us!

const bigReducer = combineReducers({
  article: articleReducer,
  user: userReducer,
});

const store = configureStore({
  reducer: bigReducer,
});

export default store;
