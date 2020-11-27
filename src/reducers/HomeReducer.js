import { FIND_PLAYLIST_FOR_HOME, FIND_POSTS } from '../actions/HomeAction';

const initialState = {
  playlists: [],
  posts: [],
};

const HomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FIND_PLAYLIST_FOR_HOME:
      return {
        ...state,
        playlists: action.playlists,
      };
    case FIND_POSTS:
      return {
        ...state,
        posts: action.posts.reverse(),
      };
    default:
      return state;
  }
};

export default HomeReducer;
