import { connect } from 'react-redux';
import HomePage from '../components/Home/HomePage';
import { findProfile, findImage } from '../actions/ProfileAction';
import { findPlayListsForHome, findPosts } from '../actions/HomeAction';
import Service from '../services/Services';

const stateToPropertyMapper = (state) => ({
  userId: state.LoginReducer.userId,
  playlist: state.HomeReducer.playlists,
  posts: state.HomeReducer.posts,
});

const propertyToDispatchMapper = (dispatch) => ({
  findPosts: () => {
    Service.findAllPosts().then((response) => {
      findPosts(dispatch, response);
    });
  },
  findProfile: (json) => {
    Service.findProfile(json).then((profile) => {
      findProfile(dispatch, profile);
    });
    Service.findImage(json).then((sprofile) => {
      findImage(dispatch, sprofile.images[0].url);
    });
  },
  findPlaylist: (query) => {
    Service.searchForPlaylists(query).then((result) => {
      findPlayListsForHome(dispatch, result);
    });
  },
});

export default connect(stateToPropertyMapper, propertyToDispatchMapper)(HomePage);
