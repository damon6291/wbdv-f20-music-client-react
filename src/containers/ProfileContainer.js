import { connect } from 'react-redux';
import Profile from '../components/Profile/Profile';
import Navbar from '../components/Navbar/Navbar';
import Login from '../components/Login/Login';
import {
  findProfile,
  findPlaylists,
  findMyProfile,
  findFollowing,
  addUserName,
} from '../actions/ProfileAction';
import Service from '../services/Services';

const stateToPropertyMapper = (state) => ({
  userName: state.ProfileReducer.userName,
  profile: state.ProfileReducer.profile,
  playlists: state.ProfileReducer.playlists,
  following: state.ProfileReducer.following,
});

const propertyToDispatchMapper = (dispatch) => ({
  addUserName: (name) => addUserName(dispatch, name),
  findProfile: (json) =>
    Service.findProfile(json).then((profile) => {
      findProfile(dispatch, profile);
    }),
  findPlaylists: (query) =>
    Service.findPlaylistsForUser(query).then((playlists) => {
      findPlaylists(dispatch, playlists);
    }),
  findMyProfile: () =>
    Service.findMyProfile().then((profile) => {
      findMyProfile(dispatch, profile);
      console.log(profile.id);
      Service.findPlaylistsForUser(profile.id).then((playlists) => {
        findPlaylists(dispatch, playlists);
      });
      Service.findFollowersForUser().then((following) => {
        findFollowing(dispatch, following);
      });
    }),
});

export default {
  Profile: connect(stateToPropertyMapper, propertyToDispatchMapper)(Profile),
  Login: connect(stateToPropertyMapper, propertyToDispatchMapper)(Login),
};
