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

const UserEdit = ({ userId }) => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="container pt-1">
        <h2 className="font-weight-bold float-">
          <FontAwesomeIcon icon={faLock} /> Editing profile of /user/
        </h2>
        <div className="row">
          <div className="col">
            <h4>Username</h4>
            <div class="input-group">
              <input type="text" class="form-control" placeholder="" />
              <div class="input-group-append">
                <button class="btn btn-info" type="button">
                  <FontAwesomeIcon icon={faPencilAlt} />
                </button>
              </div>
            </div>
            <h4>Full name</h4>
            <div class="input-group">
              <input type="text" class="form-control" placeholder="" />
              <div class="input-group-append">
                <button class="btn btn-info" type="button">
                  <FontAwesomeIcon icon={faPencilAlt} />
                </button>
              </div>
            </div>
            <h4>Phone number</h4>
            <div class="input-group">
              <input type="text" class="form-control" placeholder="" />
              <div class="input-group-append">
                <button class="btn btn-info" type="button">
                  <FontAwesomeIcon icon={faPencilAlt} />
                </button>
              </div>
            </div>
            <h4>Email</h4>
            <div class="input-group">
              <input type="text" class="form-control" placeholder="" />
              <div class="input-group-append">
                <button class="btn btn-info" type="button">
                  <FontAwesomeIcon icon={faPencilAlt} />
                </button>
              </div>
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
)(UserEdit);
