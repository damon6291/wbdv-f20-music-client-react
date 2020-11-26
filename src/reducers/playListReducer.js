import { FIND_PLAYLIST, FIND_USERS } from '../actions/playListAction';

const initialState = {
  playLists: [],
  users: [],
};

const playListReducer = (state = initialState, action) => {
  switch (action.type) {
    case FIND_PLAYLIST:
      return {
        ...state,
        playLists: action.playLists,
      };
    case FIND_USERS:
      return {
        ...state,
        users: action.users,
      };
    default:
      return state;
  }
};

export default playListReducer;
