import { connect } from 'react-redux';
import Profile from '../components/Profile/Profile';
import Login from '../components/Login/Login';
import { findProfile, findPlaylists, addUserName, findImage } from '../actions/ProfileAction';
import Service from '../services/Services';

const stateToPropertyMapper = (state) => ({
  userId: state.ProfileReducer.userId,
  profile: state.ProfileReducer.profile,
  playlists: state.ProfileReducer.playlists,
  image: state.ProfileReducer.image,
});

const propertyToDispatchMapper = (dispatch) => ({
  addUserName: (name) => addUserName(dispatch, name),
  findProfile: (json) => {
    Service.findProfile(json).then((profile) => {
      findProfile(dispatch, profile);
    });
    Service.findImage(json).then((sprofile) => {
      findImage(dispatch, sprofile.images[0].url);
    });
  },
  findPlaylists: (query) =>
    Service.findPlaylistsForUser(query).then((playlists) => {
      findPlaylists(dispatch, playlists);
    }),
});

export default {
  Profile: connect(stateToPropertyMapper, propertyToDispatchMapper)(Profile),
  Login: connect(stateToPropertyMapper, propertyToDispatchMapper)(Login),
};
