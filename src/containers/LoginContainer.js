import { connect } from 'react-redux';
import { addUserName, findImage, findProfile } from '../actions/LoginAction';
import Login from '../components/Login/Login';
import Service from '../services/Services';

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

export default connect(null, propertyToDispatchMapper)(Login);
