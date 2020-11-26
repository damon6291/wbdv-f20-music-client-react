import { FIND_PLAYLIST_FOR_HOME } from '../actions/HomeAction';

const initialState = {
  playlists: [],
};

const HomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FIND_PLAYLIST_FOR_HOME:
      return {
        playlists: action.playlists,
      };
    default:
      return state;
  }
};

export default HomeReducer;
