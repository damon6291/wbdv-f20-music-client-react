import { connect } from 'react-redux';
import Login from '../components/Login/Login';
import { addUserName, findImage, findProfile } from '../actions/LoginAction';
import Service from '../services/Services';

const stateToPropertyMapper = (state) => ({});

const propertyToDispatchMapper = (dispatch) => ({
  addUserName: (userId) => {
    addUserName(dispatch, userId);
    Service.findProfile(userId).then((profile) => {
      findProfile(dispatch, profile);
    });
    Service.findImage(userId).then((sprofile) => {
      findImage(dispatch, sprofile.images[0].url);
    });
  },
});

export default connect(stateToPropertyMapper, propertyToDispatchMapper)(Login);
