export const FIND_PROFILE = 'FIND_PROFILE';
export const FIND_PLAYLISTS = 'FIND_PLAYLISTS';
export const FIND_IMAGE = 'FIND_IMAGE';

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

export const findImage = (dispatch, image) => {
  dispatch({
    type: FIND_IMAGE,
    image,
  });
};
