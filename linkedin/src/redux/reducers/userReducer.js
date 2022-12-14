import {
  GET_USER,
  GET_ALL_USERS,
  GET_EXPERIENCES,
  GET_POSTS,
} from "../actions/actionType";
const INITIAL_STATE = {
  user: [],
  users: [],
  experiences: [],
  posts: [],
};
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case GET_EXPERIENCES:
      return {
        ...state,
        experiences: action.payload,
      };
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    default:
      return state;
  }
};
export default userReducer;
