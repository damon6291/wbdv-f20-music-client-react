import { connect } from "react-redux";
import { addUserName, findImage, findProfile } from "../actions/LoginAction";
import Login from "../components/Login/Login";
import Service from "../services/Services";

const propertyToDispatchMapper = (dispatch) => ({
  addUserName: (userId) => {
    addUserName(dispatch, userId);
    Service.findProfile(userId).then((profile) => {
      findProfile(dispatch, profile);
    });
    Service.findImage(userId).then((sprofile) => {
      try {
        findImage(dispatch, sprofile.images[0].url);
      } catch (error) {
        findImage(
          dispatch,
          "https://moonvillageassociation.org/wp-content/uploads/2018/06/default-profile-picture1.jpg"
        );
      }
    });
  },
});

export default connect(null, propertyToDispatchMapper)(Login);
