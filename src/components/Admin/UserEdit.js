import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faTrash, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Service from '../../services/Services';
import { adminFindUser } from '../../actions/AdminAction';
import { clienturl } from '../../utils/constant';

import Navbar from '../Navbar/Navbar';

const UserEdit = ({ uid, user = [], findUser, editProfile }) => {
  const [userName, setUserName] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  useEffect(() => {
    const foo = async () => {
      await findUser(uid);
    };
    foo();
  }, [uid]);

  const setter = () => {
    setUserName(user.userName);
    setDisplayName(user.displayName);
    setPhone(user.phone);
    setEmail(user.email);
  };

  const handleSubmit = () => {
    editProfile(uid, {
      userName: userName === '' ? user.userName : userName,
      displayName: displayName === '' ? user.displayName : displayName,
      phone: phone === '' ? user.phone : phone,
      email: email === '' ? user.email : email,
    });
    window.location.assign(`${clienturl}Admin/edit/${uid}`);
  };

  return (
    <React.Fragment>
      <Navbar />
      <div className="container pt-1">
        <h2 className="font-weight-bold float-">
          {console.log(user)}
          <FontAwesomeIcon icon={faLock} /> Editing profile of {user.displayName}
        </h2>
        <div className="row">
          <div className="col">
            <h4>Username</h4>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder={user.userName}
                onChange={(e) => setUserName(e.target.value)}
              />
              <div className="input-group-append">
                <button className="btn btn-info" type="button">
                  <FontAwesomeIcon icon={faPencilAlt} />
                </button>
              </div>
            </div>
            <h4>Full name</h4>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder={user.displayName}
                onChange={(e) => setDisplayName(e.target.value)}
              />
              <div className="input-group-append">
                <button className="btn btn-info" type="button">
                  <FontAwesomeIcon icon={faPencilAlt} />
                </button>
              </div>
            </div>
            <h4>Phone number</h4>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder={user.phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <div className="input-group-append">
                <button className="btn btn-info" type="button">
                  <FontAwesomeIcon icon={faPencilAlt} />
                </button>
              </div>
            </div>
            <h4>Email</h4>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder={user.email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="input-group-append">
                <button className="btn btn-info" type="button">
                  <FontAwesomeIcon icon={faPencilAlt} />
                </button>
              </div>
            </div>
            <div>
              <button onClick={() => handleSubmit()}>Change</button>
            </div>
          </div>
          {/* <div className="col-6"></div> */}
        </div>
      </div>
    </React.Fragment>
  );
};

const stateToPropertyMapper = (state) => ({
  // userId: state.LoginReducer.userId,
  // image: state.LoginReducer.image,
  // profile: state.LoginReducer.profile,
  user: state.AdminReducer.user,
});

const propertyToDispatchMapper = (dispatch) => ({
  // addUserName: (userId) => {
  //   addUserName(dispatch, userId);
  //   Service.findProfile(userId).then((profile) => {
  //     findProfile(dispatch, profile);
  //   });
  //   Service.findImage(userId).then((sprofile) => {
  //     findImage(dispatch, sprofile.images[0].url);
  //   });
  // },
  editProfile: (id, json) => {
    Service.editProfile(id, json).then((profile) => {
      adminFindUser(dispatch, profile);
    });
  },
  findUser: (userId) => {
    Service.findProfile(userId).then((response) => {
      adminFindUser(dispatch, response);
    });
  },
});

export default connect(stateToPropertyMapper, propertyToDispatchMapper)(UserEdit);
