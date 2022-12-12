import { SET_LOADING_STATUS, SET_USER, GET_ARTICLES } from "./actionType";
export const GET_USER = "GET_USER"

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk3MGUyNGM5NmRmYjAwMTUyMWE1Y2IiLCJpYXQiOjE2NzA4NDM5NDEsImV4cCI6MTY3MjA1MzU0MX0.Qm_ZzDeGQlQRrsmmUmAtO_z0a5kSIustgl10dzKwoyU"
const modelUrl = "https://striveschool-api.herokuapp.com/api/profile/5fc4af0bb708c200175de88e"

export function setUser(payload) {
	return {
		type: SET_USER,
		user: payload,
	};
}


export const getUserAction = () => {


	return async (dispatch, getState) => {
	  console.log('Fetching the user from the API...')
	  try {
		let resp = await fetch(
		  {modelUrl}, {
			method: 'get',
			headers: {
				Authorization: 'Bearer' + {token}
			}
		  }
		)
		if (resp.ok) {
		  let fetchedUser = await resp.json()
		  dispatch({
			type: GET_USER,
			payload: fetchedUser, // the reducer is just being given
			// the final result, the array of books! so it cannot fail :)
		  })
		} else {
		  console.log('error')
		}
	  } catch (error) {
		console.log(error)
	  }
	}
  }