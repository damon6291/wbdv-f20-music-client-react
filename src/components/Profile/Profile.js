import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import { Navbar, Playlist, User } from '../index';
import backgroundImg from '../../assets/background.jpg';
import exampleImg from '../../assets/damon.jpg';

const Profile = ({ ownerId, profile = [], findProfile }) => {
  const getData = async () => {
    await findProfile({ ownerId: ownerId });
  };

  useEffect(() => {
    //getData();
  }, []);

  return (
    <React.Fragment>
      <Navbar />
      <div>
        <img src={backgroundImg} alt="background" className="background-image shadow" />
        <div className="container position-relative profile-position">
          <div className="d-flex align-items-end px-5">
            <img src={exampleImg} alt="profile" className="profile-image border mr-4 shadow" />
            <div className="d-flex flex-column">
              <h4 className="mb-2">Damon Joung {ownerId}</h4>
              <span className="text-secondary mb-2">
                <small>5 Followers</small>
              </span>
            </div>
            <button className="btn btn-danger h-25 ml-auto px-2 py-1 mb-4">Follow</button>
          </div>

          <div className="d-flex mt-5">
            <div className="col-8">
              <div className="w-75">
                <h3 className="border-bottom pl-4 pb-3">Playlists</h3>
              </div>
            </div>
            <div className="col-4">
              <div className="w-100">
                <h3 className="border-bottom pl-4 pb-3">Followers</h3>
                <User />
                <User />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Profile;
