import { FIND_PROFILE } from '../actions/ProfileAction';

const initialState = {
  profile: [],
};

const ProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case FIND_PROFILE:
      return {
        profile: action.profile,
      };
    default:
      return state;
  }
};

export default ProfileReducer;
