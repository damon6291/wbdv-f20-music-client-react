export const FIND_PROFILE = 'FIND_PROFILE';
export const FIND_PLAYLISTS = 'FIND_PLAYLISTS';
export const FIND_MYPROFILE = 'FIND_MYPROFILE';
export const FIND_FOLLOWING = 'FIND_FOLLOWING';
export const ADD_USERNAME = 'ADD_USERNAME';

export const addUserName = (dispatch, name) => {
  dispatch({
    type: ADD_USERNAME,
    name,
  });
};

export const findProfile = (dispatch, profile) => {
  dispatch({
    type: FIND_PROFILE,
    profile,
  });
};

export const findPlaylists = (dispatch, playlists) => {
  dispatch({
    type: FIND_PLAYLISTS,
    playlists,
  });
};

export const findMyProfile = (dispatch, profile) => {
  dispatch({
    type: FIND_MYPROFILE,
    profile,
  });
};

export const findFollowing = (dispatch, following) => {
  dispatch({
    type: FIND_FOLLOWING,
    following,
  });
};
