import { FIND_PROFILE, FIND_PLAYLISTS, ADD_USERNAME, FIND_IMAGE } from '../actions/ProfileAction';

const initialState = {
  userId: '',
  profile: [],
  playlists: [],
  image: '',
};

const ProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USERNAME:
      console.log(action.name);
      return {
        ...state,
        userId: action.name,
      };
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
