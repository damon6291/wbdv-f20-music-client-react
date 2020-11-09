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
// Import in this order for responsive nav toggle to work!
import '../../../node_modules/jquery/dist/jquery.min.js';
import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js';

import exampleImg from '../../assets/damon.jpg';

const Navbar = () => {
  return (
    <nav class="navbar sticky-top navbar-dark bg-dark navbar-expand-md shadow-lg ">
      <span class="navbar-brand font-weight-bold">(logo)</span>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse " id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto ">
          <li class="nav-item">
            <Link class="nav-link" to="/Home">
              <FontAwesomeIcon icon={faHome} />
              &nbsp; Home
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/Profile">
              <FontAwesomeIcon icon={faUserCircle} />
              &nbsp; Profile
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/Search">
              <FontAwesomeIcon icon={faSearch} />
              &nbsp; Search
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/Login">
              <FontAwesomeIcon icon={faSignInAlt} />
              &nbsp; Login
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/Register">
              <FontAwesomeIcon icon={faUserPlus} />
              &nbsp; Register
            </Link>
          </li>
          {/* <li class="nav-item">
            <Link class="nav-link" to="/Details">
              <FontAwesomeIcon icon={faListOl} />
              &nbsp; Details
            </Link>
          </li> */}
        </ul>

        <span className="float-right text-white">
          <img style={{ height: '35px' }} className="rounded-circle mr-2" src={exampleImg} />
          (username)
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
