// import { SET_LOADING_STATUS, SET_USER, GET_ARTICLES } from "./actionType";
// export const GET_USER = "GET_USER"

// const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk3MGUyNGM5NmRmYjAwMTUyMWE1Y2IiLCJpYXQiOjE2NzA4NDM5NDEsImV4cCI6MTY3MjA1MzU0MX0.Qm_ZzDeGQlQRrsmmUmAtO_z0a5kSIustgl10dzKwoyU"
// const modelUrl = "https://striveschool-api.herokuapp.com/api/profile/5fc4af0bb708c200175de88e"

// export function setUser(payload) {
// 	return {
// 		type: SET_USER,
// 		user: payload,
// 	};
// }

// const redux = require('redux')
// const thunkMiddleware = require('redux-thunk').default
// const axios = require('axios')
// const createStore = redux.createStore
// const applyMiddleware = redux.applyMiddleware

// const initialState = {
//   loading: false,
//   users: [],
//   error: ''
// }

// const FETCH_USERS_REQUESTED = 'FETCH_USERS_REQUESTED'
// const FETCH_USERS_SUCCEEDED = 'FETCH_USERS_SUCCEEDED'
// const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED'

// const fetchUsersRequest = () => {
//   return {
//     type: FETCH_USERS_REQUESTED
//   }
// }

// const fetchUsersSuccess = users => {
//   return {
//     type: FETCH_USERS_SUCCEEDED,
//     payload: users
//   }
// }

// const fetchUsersFailure = error => {
//   return {
//     type: FETCH_USERS_FAILED,
//     payload: error
//   }
// }

// const fetchUsers = () => {
//   return function (dispatch) {
//     dispatch(fetchUsersRequest())
//     axios
//       .get('https://jsonplaceholder.typicode.com/users')
//       .then(response => {
//         // response.data is the users
//         const users = response.data.map(user => user.id)
//         dispatch(fetchUsersSuccess(users))
//       })
//       .catch(error => {
//         // error.message is the error message
//         dispatch(fetchUsersFailure(error.message))
//       })
//   }
// }

// const reducer = (state = initialState, action) => {
//   console.log(action.type)
//   switch (action.type) {
//     case FETCH_USERS_REQUESTED:
//       return {
//         ...state,
//         loading: true
//       }
//     case FETCH_USERS_SUCCEEDED:
//       return {
//         loading: false,
//         users: action.payload,
//         error: ''
//       }
//     case FETCH_USERS_FAILED:
//       return {
//         loading: false,
//         users: [],
//         error: action.payload
//       }
// 	  default:
// 	  return state;
//   }
// }

// const store = createStore(reducer, applyMiddleware(thunkMiddleware))
// store.subscribe(() => {
//   console.log(store.getState())
// })
// store.dispatch(fetchUsers())

// // export const getUserAction = () => {

// // 	return async (dispatch, getState) => {
// // 	  console.log('Fetching the user from the API...')
// // 	  try {
// // 		let resp = await fetch(
// // 		  {modelUrl}, {
// // 			method: 'get',
// // 			headers: {
// // 				Authorization: 'Bearer' + {token}
// // 			}
// // 		  }
// // 		)
// // 		if (resp.ok) {
// // 		  let fetchedUser = await resp.json()
// // 		  dispatch({
// // 			type: GET_USER,
// // 			payload: fetchedUser, // the reducer is just being given
// // 			// the final result, the array of books! so it cannot fail :)
// // 		  })
// // 		} else {
// // 		  console.log('error')
// // 		}
// // 	  } catch (error) {
// // 		console.log(error)
// // 	  }
// // 	}
// //   }
export const SET_USER = "SET_USER";
export const SET_LOADING_STATUS = "SET_LOADING_STATUS";
export const GET_ARTICLES = "GET_ARTICLES";
export const GET_USER = "GET_USER";
