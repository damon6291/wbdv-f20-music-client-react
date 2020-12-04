import { connect } from 'react-redux';
import Profile from '../components/Profile/Profile';
import { findProfile, findPlaylists, findImage } from '../actions/ProfileAction';
import Service from '../services/Services';

const stateToPropertyMapper = (state) => ({
  profile: state.ProfileReducer.profile,
  playlists: state.ProfileReducer.playlists,
  image: state.ProfileReducer.image,
  userId: state.LoginReducer.userId,
});

const propertyToDispatchMapper = (dispatch) => ({
  findProfile: (json) => {
    Service.findProfile(json).then((profile) => {
      findProfile(dispatch, profile);
    });
    Service.findImage(json).then((sprofile) => {
      findImage(dispatch, sprofile.images ? sprofile.images[0].url : "https://moonvillageassociation.org/wp-content/uploads/2018/06/default-profile-picture1.jpg");
    });
  },
  findPlaylists: (query) =>
    Service.findPlaylistsForUser(query).then((playlists) => {
      findPlaylists(dispatch, playlists);
    }),
  followUser: (from, to) => Service.followUser(from, to).then((result) => console.log(result)),
});

export default connect(stateToPropertyMapper, propertyToDispatchMapper)(Profile);
