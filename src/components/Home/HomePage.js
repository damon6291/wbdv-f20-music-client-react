import React, { useEffect } from 'react';
import './HomePage.css';

import Navbar from '../Navbar/Navbar';
import Post from './Post';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faSearch, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const HomePage = ({ playLists = [], findPlayLists }) => {
  useEffect(() => {
    const getData = async () => {
      await findPlayLists('top');
    };
    getData();
  }, []);

  return (
    <React.Fragment>
      <Navbar />
      <div className="container animate__animated animate__fadeIn">
        <div className="row">
          <div className="col-2">
            <div className="d-flex flex-column align-self-center">
              <Link className="btn btn-lg btn-dark mt-5" to="/Profile">
                <FontAwesomeIcon icon={faUserCircle} />
                {/* &nbsp; My profile */}
              </Link>
              <Link className="btn btn-lg btn-info mt-2" to="/Search">
                <FontAwesomeIcon icon={faSearch} />
                {/* &nbsp; Search playlists */}
              </Link>
              <Link className="btn btn-lg btn-danger mt-2" to="/Home">
                <FontAwesomeIcon icon={faSignOutAlt} />
                {/* &nbsp; Logout */}
              </Link>
            </div>
          </div>
          <div className="col-7 mt-3">
            <h4 className="text-right font-weight-light">Your feed</h4>
            <Post />
            <Post />
            <Post />
          </div>
          <div className="col-3 mt-3">
            <h4 className="text-right font-weight-light">Trending music</h4>
            <Post />
            <Post />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
