<<<<<<< Updated upstream
import { SET_USER } from "../actions/actionType";

const INITIAL_STATE = {
  user: null,
=======
import {
  GET_USER,
  GET_ALL_USERS,
  GET_EXPERIENCES,
  GET_CURRENT_USER
} from "../actions/actionType";
const INITIAL_STATE = {
  user: [],
  users: [],
  experiences: [],
  currentUser: null,
>>>>>>> Stashed changes
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.user,
      };
      case GET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
