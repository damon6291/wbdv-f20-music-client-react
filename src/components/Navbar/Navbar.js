import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUserCircle,
  faSearch,
  faSignInAlt,
  faUserPlus,
  faUserLock,
  faMusic,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  addUserName,
  findImage,
  findProfile,
  reset,
} from "../../actions/LoginAction";
import Service from "../../services/Services";

// Import in this order for responsive nav toggle to work!
import "../../../node_modules/jquery/dist/jquery.min.js";
import "../../../node_modules/bootstrap/dist/js/bootstrap.min.js";

const Navbar = ({ userId, image, profile, addUserName, logOut }) => {
  useEffect(() => {
    Service.findCurrent().then((result) =>
      result.message !== "error" ? addUserName(result.message) : null
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const logOutHandler = () => {
    logOut();
  };

  return (
    <nav className="navbar sticky-top navbar-dark bg-dark navbar-expand-md shadow-lg ">
      <span className="navbar-brand font-weight-bold">
        <FontAwesomeIcon icon={faMusic} />
      </span>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse " id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto ">
          {userId !== "" ? (
            <React.Fragment>
              <li className="nav-item">
                <Link className="nav-link" to="/Home">
                  <FontAwesomeIcon icon={faHome} />
                  &nbsp; Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={`/Profile`}>
                  <FontAwesomeIcon icon={faUserCircle} />
                  &nbsp; Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Search">
                  <FontAwesomeIcon icon={faSearch} />
                  &nbsp; Search
                </Link>
              </li>
              {profile.role === "Admin" ? (
                <li className="nav-item">
                  <Link className="nav-link" to="/Admin">
                    <FontAwesomeIcon icon={faUserLock} />
                    &nbsp; Admin
                  </Link>
                </li>
              ) : null}
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/Home"
                  onClick={() => logOutHandler()}
                >
                  <FontAwesomeIcon icon={faSignOutAlt} />
                  &nbsp; Log out
                </Link>
              </li>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <li className="nav-item">
                <Link className="nav-link" to="/Home">
                  <FontAwesomeIcon icon={faHome} />
                  &nbsp; Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Login">
                  <FontAwesomeIcon icon={faSignInAlt} />
                  &nbsp; Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Register">
                  <FontAwesomeIcon icon={faUserPlus} />
                  &nbsp; Register
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Search">
                  <FontAwesomeIcon icon={faSearch} />
                  &nbsp; Search
                </Link>
              </li>
            </React.Fragment>
          )}
        </ul>
        <Link to={`/Profile`} className="float-right text-white">
          <img
            style={{ height: "35px" }}
            alt=""
            className="rounded-circle mr-2"
            src={image}
          />
          {profile.displayName}
        </Link>
      </div>
    </nav>
  );
};

const stateToPropertyMapper = (state) => ({
  userId: state.LoginReducer.userId,
  image: state.LoginReducer.image,
  profile: state.LoginReducer.profile,
});

const propertyToDispatchMapper = (dispatch) => ({
  addUserName: (userId) => {
    addUserName(dispatch, userId);
    Service.findProfile(userId).then((profile) => {
      findProfile(dispatch, profile);
    });
    Service.findImage(userId).then((sprofile) => {
      // findImage(dispatch, sprofile.images[0].url);
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
  logOut: () => {
    Service.logOut().then((response) => console.log(response));
    reset(dispatch);
  },
});

export default connect(stateToPropertyMapper, propertyToDispatchMapper)(Navbar);
