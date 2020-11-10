import { connect } from 'react-redux';
import Profile from '../components/Profile/Profile';
import { findProfile } from '../actions/ProfileAction';
import Service from '../services/Services';

const stateToPropertyMapper = (state) => ({
  profile: state.ProfileReducer.profile,
});

const propertyToDispatchMapper = (dispatch) => ({
  findProfile: (json) =>
    Service.findProfile(json).then((profile) => {
      findProfile(dispatch, profile);
    }),
});

export default connect(stateToPropertyMapper, propertyToDispatchMapper)(Profile);
