import { FIND_DETAILS } from '../actions/DetailsAction';

const initialState = {
  details: [],
  totalRuntime: 0,
};

const DetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FIND_DETAILS:
      let time = 0;
      action.details.tracks.items.map(
        (item, id) => (time += item.track === null ? 0 : item.track.duration_ms)
      );
      return {
        details: action.details,
        totalRuntime: time,
      };
    default:
      return state;
  }
};

export default DetailsReducer;
