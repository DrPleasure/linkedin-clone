import { SET_LOADING_STATUS, SET_USER, GET_ARTICLES } from "./actionType";


export function setUser(payload) {
	return {
		type: SET_USER,
		user: payload,
	};
}