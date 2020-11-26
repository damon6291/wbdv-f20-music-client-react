import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import { Navbar, Playlist, User } from '../index';
import backgroundImg from '../../assets/background.jpg';
import Utils from '../../utils/utils';

const Profile = ({ ownerId, profile = [], findProfile, playlists = [], findPlaylists, image }) => {
  const exist = (item) => Utils.exist(item);

  useEffect(() => {
    const getData = async () => {
      findProfile(ownerId);
      findPlaylists(ownerId);
    };
    getData();
  }, [ownerId]);

  return (
    <React.Fragment>
      <Navbar />
      <div className="animate__animated animate__fadeIn">
        <img src={backgroundImg} alt="background" className="background-image shadow" />
        <div className="container position-relative profile-position">
          <div className="d-flex align-items-end px-5">
            <img src={image} alt="profile" className="profile-image border mr-4 shadow" />
            <div className="d-flex flex-column">
              <h4 className="mb-2">{profile.displayName}</h4>
              <span className="text-secondary mb-2">
                <small>Followers: {exist(profile) && profile.followers.length}</small>
              </span>
            </div>
            <button className="btn btn-danger h-25 ml-auto px-2 py-1 mb-4">Follow</button>
          </div>

          <div className="d-flex mt-5">
            <div className="col-8">
              <div className="w-75">
                <h3 className="border-bottom pl-4 pb-3">Playlists</h3>
                {exist(playlists) &&
                  playlists.map((playList, id) => {
                    console.log(playList);
                    return <Playlist key={id} playList={playList} />;
                  })}
              </div>
            </div>
            <div className="col-4">
              <div className="w-100">
                <h3 className="border-bottom pl-4 pb-3">Followers</h3>
                {exist(profile) &&
                  profile.followers.map((userId, id) => {
                    return <User key={id} userId={userId} />;
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Profile;
