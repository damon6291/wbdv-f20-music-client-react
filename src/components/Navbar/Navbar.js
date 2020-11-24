import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faUserCircle,
  faSearch,
  faSignInAlt,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { url } from '../../utils/constant';
import Services from '../../services/Services';

// Import in this order for responsive nav toggle to work!
import '../../../node_modules/jquery/dist/jquery.min.js';
import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js';

import exampleImg from '../../assets/damon.jpg';

const Navbar = (loggedIn) => {
  return (
    <nav className="navbar sticky-top navbar-dark bg-dark navbar-expand-md shadow-lg ">
      <span className="navbar-brand font-weight-bold">(logo)</span>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse " id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto ">
          {console.log(loggedIn)}
          {loggedIn.loggedIn ? (
            <React.Fragment>
              <li className="nav-item">
                <Link className="nav-link" to="/Home">
                  <FontAwesomeIcon icon={faHome} />
                  &nbsp; Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Profile/spotify">
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
            </React.Fragment>
          ) : (
            <React.Fragment>
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
            </React.Fragment>
          )}

          {/* <li className="nav-item">
            <Link className="nav-link" to="/Details">
              <FontAwesomeIcon icon={faListOl} />
              &nbsp; Details
            </Link>
          </li> */}
        </ul>

        <a className="float-right text-white" href="#">
          <img
            style={{ height: '35px' }}
            alt="user"
            className="rounded-circle mr-2"
            src={exampleImg}
            onClick={() => {
              Services.spotifyLogin(`${url}spotifylogin/username`);
            }}
          />
          (username)
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
