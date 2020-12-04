export const ADD_USERNAME = 'ADD_USERNAME';
export const FIND_IMAGE_LOGGED_IN = 'FIND_IMAGE_LOGGED_IN';
export const FIND_PROFILE_LOGGED_IN = 'FIND_PROFILE_LOGGED_IN';
export const RESET = 'RESET';

export const findImage = (dispatch, image) => {
  dispatch({
    type: FIND_IMAGE_LOGGED_IN,
    image,
  });
};

export const addUserName = (dispatch, userId) => {
  dispatch({
    type: ADD_USERNAME,
    userId,
  });
};

export const findProfile = (dispatch, profile) => {
  dispatch({
    type: FIND_PROFILE_LOGGED_IN,
    profile,
  });
};

export const reset = (dispatch) => {
  dispatch({
    type: RESET,
  });
};
