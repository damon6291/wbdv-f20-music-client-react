import {
  FIND_PROFILE,
  FIND_PLAYLISTS,
  FIND_MYPROFILE,
  FIND_FOLLOWING,
} from '../actions/ProfileAction';

const initialState = {
  profile: [],
  playlists: [],
  following: [],
};

const ProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case FIND_PROFILE:
      return {
        ...state,
        following: [],
        profile: action.profile,
      };
    case FIND_PLAYLISTS:
      return {
        ...state,
        playlists: action.playlists,
      };
    case FIND_MYPROFILE:
      return {
        playlists: action.playlists,
        profile: action.profile,
      };
    case FIND_FOLLOWING:
      return {
        ...state,
        following: action.following,
      };
    default:
      return state;
  }
};

export default ProfileReducer;
