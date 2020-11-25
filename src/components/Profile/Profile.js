import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import { Navbar, Playlist, User } from '../index';
import backgroundImg from '../../assets/background.jpg';
import Utils from '../../utils/utils';

const Profile = ({
  ownerId,
  profile = [],
  findProfile,
  playlists = [],
  findPlaylists,
  findMyProfile,
  following = [],
}) => {
  const getData = async () => {
    if (ownerId === 'myprofile') {
      findMyProfile();
    } else {
      findProfile(ownerId);
      findPlaylists(ownerId);
    }
  };

  const exist = (item) => Utils.exist(item);
  const images = profile.images;

  useEffect(() => {
    getData();
  }, []);

  return (
    <React.Fragment>
      <Navbar />
      <div className="animate__animated animate__fadeIn">
        {console.log(following)}
        <img src={backgroundImg} alt="background" className="background-image shadow" />
        <div className="container position-relative profile-position">
          <div className="d-flex align-items-end px-5">
            <img
              src={exist(profile) && exist(images) ? images[0].url : null}
              alt="profile"
              className="profile-image border mr-4 shadow"
            />
            <div className="d-flex flex-column">
              <h4 className="mb-2">{profile.display_name}</h4>
              <span className="text-secondary mb-2">
                <small>Followers: {exist(profile) && profile.followers.total}</small>
              </span>
            </div>
            <button className="btn btn-danger h-25 ml-auto px-2 py-1 mb-4">Follow</button>
          </div>

          <div className="d-flex mt-5">
            <div className="col-8">
              <div className="w-75">
                <h3 className="border-bottom pl-4 pb-3">Playlists</h3>
                {exist(playlists) &&
                  playlists.items.map((playList, id) => {
                    return <Playlist key={id} playList={playList} />;
                  })}
              </div>
            </div>
            <div className="col-4">
              <div className="w-100">
                <h3 className="border-bottom pl-4 pb-3">Followers</h3>
                {exist(following) &&
                  following.artists.items.map((artist, id) => {
                    console.log(artist);
                    return (
                      <User
                        key={id}
                        img={exist(artist.images) ? artist.images[0].url : null}
                        name={artist.name}
                        followers={artist.followers.total}
                      />
                    );
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
