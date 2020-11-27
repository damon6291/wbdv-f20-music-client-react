export const FIND_PLAYLIST_FOR_HOME = 'FIND_PLAYLIST_FOR_HOME';
export const FIND_POSTS = 'FIND_POSTS';

export const findPlayListsForHome = (dispatch, playlists) =>
  dispatch({
    type: FIND_PLAYLIST_FOR_HOME,
    playlists,
  });

export const findPosts = (dispatch, posts) =>
  dispatch({
    type: FIND_POSTS,
    posts,
  });
