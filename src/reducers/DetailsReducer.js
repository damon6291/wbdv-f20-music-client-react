import { FIND_DETAILS, FIND_POSTS_FOR_DETAILS } from '../actions/DetailsAction';

const initialState = {
  details: [],
  totalRuntime: 0,
  posts: [],
};

const DetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FIND_DETAILS:
      let time = 0;
      action.details.tracks.items.map(
        (item, id) => (time += item.track === null ? 0 : item.track.duration_ms)
      );
      return {
        ...state,
        details: action.details,
        totalRuntime: time,
      };
    case FIND_POSTS_FOR_DETAILS:
      return {
        ...state,
        posts: action.posts,
      };
    default:
      return state;
  }
};

export default DetailsReducer;
