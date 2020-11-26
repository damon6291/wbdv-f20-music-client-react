import { ADD_USERNAME, FIND_PROFILE_LOGGED_IN, FIND_IMAGE_LOGGED_IN } from '../actions/LoginAction';

const initialState = {
  userId: '',
  profile: [],
  image: '',
};

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USERNAME:
      return {
        ...state,
        userId: action.userId,
      };
    case FIND_PROFILE_LOGGED_IN:
      return {
        ...state,
        profile: action.profile,
      };
    case FIND_IMAGE_LOGGED_IN:
      return {
        ...state,
        image: action.image,
      };

    default:
      return state;
  }
};

export default LoginReducer;
