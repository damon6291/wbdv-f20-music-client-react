export const FIND_PLAYLIST_FOR_HOME = 'FIND_PLAYLIST_FOR_HOME';

export const findPlayListsForHome = (dispatch, playlists) =>
  dispatch({
    type: FIND_PLAYLIST_FOR_HOME,
    playlists,
  });
