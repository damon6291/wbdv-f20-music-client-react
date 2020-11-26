import { FIND_PROFILE, FIND_PLAYLISTS, FIND_IMAGE } from '../actions/ProfileAction';

const initialState = {
  profile: [],
  playlists: [],
  image: '',
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
    case FIND_IMAGE:
      return {
        ...state,
        image: action.image,
      };

    default:
      return state;
  }
};

export default ProfileReducer;
