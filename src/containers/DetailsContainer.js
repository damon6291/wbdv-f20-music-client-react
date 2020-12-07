import { connect } from 'react-redux';
import Details from '../components/Details/Details';
import { findDetails, findPostsForDetails } from '../actions/DetailsAction';
import Service from '../services/Services';

const stateToPropertyMapper = (state) => ({
  details: state.DetailsReducer.details,
  totalRuntime: state.DetailsReducer.totalRuntime,
  userId: state.LoginReducer.userId,
  posts: state.DetailsReducer.posts,
});

const propertyToDispatchMapper = (dispatch) => ({
  findDetails: (json) => {
    Service.getPlaylistInformation(json).then((details) => {
      findDetails(dispatch, details);
    });
    Service.findPostsByPlaylistId(json).then((posts) => {
      findPostsForDetails(dispatch, posts);
    });
  },
});

export default connect(stateToPropertyMapper, propertyToDispatchMapper)(Details);
