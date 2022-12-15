export const SET_USER = "SET_USER";
export const SET_LOADING_STATUS = "SET_LOADING_STATUS";
export const GET_ARTICLES = "GET_ARTICLES";
export const GET_USER = "GET_USER";
export const GET_ALL_USERS = "GET_ALL_USERS";
export const GET_EXPERIENCES = "GET_EXPERIENCES";
export const GET_POSTS = "GET_POSTS";
export const GET_EXPERIENCE_DETAILS_OTHER = "GET_EXPERIENCE_DETAILS_OTHER"
export const OTHER_USER_DETAILS = "OTHER_USER_DETAILS"

const options = {
  method: "GET",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk4NDBhOTQwNWJkYTAwMTUwOTE4NDIiLCJpYXQiOjE2NzA5MjI0MTAsImV4cCI6MTY3MjEzMjAxMH0.kjWibFQVg-vQH3I0TIVSx-LtiW0RzfnZtZHc033cLR0",
  },
};

export const getOtherProfile = (userid) => {
  return async (dispatch, getState) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/" + userid,
        options
      );
      if (response.ok) {
        const fetchedData = await response.json();
        console.log(fetchedData);
        dispatch({
          type: OTHER_USER_DETAILS,
          payload: fetchedData,
        });
      } else {
        console.log("error");
      }
    } catch (erro) {
      console.log("woohs nothing is found");
    }
  };
};

export const getExperienceOtherAction = (userid) => {
  return async (dispatch, getState) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/" +
          userid +
          "/experiences/",
        options
      );
      if (response.ok) {
        let fetchedData = await response.json();
        dispatch({
          type: GET_EXPERIENCE_DETAILS_OTHER,
          payload: fetchedData,
        });
      } else {
        console.log("error fetching experiences");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const gettingUsers = () => {
  const options = {
    method: "GET",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk4NDBhOTQwNWJkYTAwMTUwOTE4NDIiLCJpYXQiOjE2NzA5MjI0MTAsImV4cCI6MTY3MjEzMjAxMH0.kjWibFQVg-vQH3I0TIVSx-LtiW0RzfnZtZHc033cLR0",
    },
  };


  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/me",
        options
      );
      if (response.ok) {
        const response_two = await response.json();

        dispatch({
          type: GET_USER, //god save us all
          payload: response_two,
        });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
//second fetch
export const gettingAllUsers = () => {
  const options = {
    method: "GET",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk4NDBhOTQwNWJkYTAwMTUwOTE4NDIiLCJpYXQiOjE2NzA5MjI0MTAsImV4cCI6MTY3MjEzMjAxMH0.kjWibFQVg-vQH3I0TIVSx-LtiW0RzfnZtZHc033cLR0",
    },
  };

  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/",
        options
      );
      if (response.ok) {
        const response_three = await response.json();

        dispatch({
          type: GET_ALL_USERS, //god save us all
          payload: response_three,
        });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
//third fetch
export const gettingExpOfUsers = () => {
  const options = {
    method: "GET",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk4NDBhOTQwNWJkYTAwMTUwOTE4NDIiLCJpYXQiOjE2NzA5MjI0MTAsImV4cCI6MTY3MjEzMjAxMH0.kjWibFQVg-vQH3I0TIVSx-LtiW0RzfnZtZHc033cLR0",
    },
  };

  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/5fc4af0bb708c200175de88e/experiences",
        options
      );
      if (response.ok) {
        const response_exp = await response.json();

        dispatch({
          type: GET_EXPERIENCES, //god save us all
          payload: response_exp,
        });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
//fourth fetch
export const gettingAllPosts = () => {
  const options = {
    method: "GET",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk4NDBhOTQwNWJkYTAwMTUwOTE4NDIiLCJpYXQiOjE2NzA5MjI0MTAsImV4cCI6MTY3MjEzMjAxMH0.kjWibFQVg-vQH3I0TIVSx-LtiW0RzfnZtZHc033cLR0",
    },
  };

  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/",
        options
      );
      if (response.ok) {
        const response_posts = await response.json();
        console.log(response_posts);

        dispatch({
          type: GET_POSTS, //god save us all
          payload: response_posts,
        });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
