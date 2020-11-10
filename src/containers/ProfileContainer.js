import { connect } from 'react-redux';
import Profile from '../components/Profile/Profile';
import { findProfile, findPlaylists, findMyProfile, findFollowing } from '../actions/ProfileAction';
import Service from '../services/Services';

const stateToPropertyMapper = (state) => ({
  profile: state.ProfileReducer.profile,
  playlists: state.ProfileReducer.playlists,
  following: state.ProfileReducer.following,
});

const propertyToDispatchMapper = (dispatch) => ({
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

export default connect(stateToPropertyMapper, propertyToDispatchMapper)(Profile);
