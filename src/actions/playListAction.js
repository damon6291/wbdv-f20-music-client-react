export const FIND_PLAYLIST = 'FIND_PLAYLIST';
export const FIND_USERS = 'FIND_USERS';

export const findPlayLists = (dispatch, playLists) =>
  dispatch({
    type: FIND_PLAYLIST,
    playLists,
  });

export const findUsers = (dispatch, users) =>
  dispatch({
    type: FIND_USERS,
    users,
  });
