export const FIND_PLAYLIST = 'FIND_PLAYLIST';

export const findPlayLists = (dispatch, playLists) =>
  dispatch({
    type: FIND_PLAYLIST,
    playLists,
  });
