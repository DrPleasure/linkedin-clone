import { SET_USER, GET_USER, GET_ALL_USERS } from "../actions/actionType";
const INITIAL_STATE = {
  user: [],
  users: [],
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
    default:
      return state;
  }
};
export default userReducer;
