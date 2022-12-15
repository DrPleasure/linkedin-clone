import {
  GET_USER,
  GET_ALL_USERS,
  GET_EXPERIENCES,
  GET_POSTS,
  OTHER_USER_DETAILS,
  GET_EXPERIENCE_DETAILS_OTHER
} from "../actions/actionType";
const INITIAL_STATE = {
  user: [],
  users: [],
  experiences: [],
  posts: [],
  otherUser: [],
  otherExperience: []
};
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OTHER_USER_DETAILS:
      return {
        ...state,
        otherUser: action.payload,
      };
      case GET_EXPERIENCE_DETAILS_OTHER:
      return {
        ...state,
        otherExperience: action.payload,
      };
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
