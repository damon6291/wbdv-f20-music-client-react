import React, { Component } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock,
  faTrash,
  faPencilAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import Navbar from "../Navbar/Navbar";

const AdminPanel = ({ userId }) => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="container pt-1">
        <h2 className="font-weight-bold float-">
          <FontAwesomeIcon icon={faLock} /> Admin Panel
        </h2>
        <h5 className="text-muted">total registered users: 3</h5>
        <ul class="list-group">
          <li class="list-group-item">
            @<span className="font-weight-bold">user123</span>
            <button className="btn btn-light float-right">
              <FontAwesomeIcon icon={faTrash} />
            </button>
            <Link
              to="/Admin/edit/:userId"
              className="float-right btn btn-light"
            >
              <FontAwesomeIcon icon={faPencilAlt} />
            </Link>
          </li>
          <li class="list-group-item">
            @<span className="font-weight-bold">abc_def</span>
            <button className="btn btn-light float-right">
              <FontAwesomeIcon icon={faTrash} />
            </button>
            <Link
              to="/Admin/edit/:userId"
              className="float-right btn btn-light"
            >
              <FontAwesomeIcon icon={faPencilAlt} />
            </Link>
          </li>
          <li class="list-group-item">
            @<span className="font-weight-bold">apple_picker</span>
            <button className="btn btn-light float-right">
              <FontAwesomeIcon icon={faTrash} />
            </button>
            <Link
              to="/Admin/edit/:userId"
              className="float-right btn btn-light"
            >
              <FontAwesomeIcon icon={faPencilAlt} />
            </Link>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

const stateToPropertyMapper = (state) => ({
  // userId: state.LoginReducer.userId,
  // image: state.LoginReducer.image,
  // profile: state.LoginReducer.profile,
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
});

export default connect(
  stateToPropertyMapper,
  propertyToDispatchMapper
)(AdminPanel);
