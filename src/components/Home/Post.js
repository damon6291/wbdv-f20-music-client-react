import React, { useState, useEffect } from 'react';
import { Playlist } from '../index';
import Service from '../../services/Services';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Post = ({ post, userId = '', refreshPost, from = '' }) => {
  const [playlist, setPlaylist] = useState([]);
  const [profile, setProfile] = useState([]);
  const [image, setImage] = useState('');

  useEffect(() => {
    const getData = async () => {
      await Service.getPlaylistInformation(post.playlistId).then((response) =>
        setPlaylist(response)
      );
      await Service.findProfile(post.userId).then((response) => setProfile(response));
      await Service.findImage(post.userId).then((response) => setImage(response.images[0].url));
    };
    getData();
  }, []);

  const onRemoveHandler = async () => {
    await Service.removePost(post._id).then((response) => console.log(response));
    refreshPost();
  };

  return (
    <div className="container-fluid m-2 webdv-playlist-style">
      <div className="row">
        <div className="col d-flex flex-row align-items-center">
          <img
            style={{ height: '30px' }}
            alt="user"
            className="rounded-circle mt-1 mr-2"
            src={image}
          />
          <Link to={`/Profile/${profile._id}`} className="mt-2 font-weight-bold text-dark">
            {profile.displayName}
          </Link>
          {userId === post.userId ? (
            <FontAwesomeIcon icon={faTimes} className="ml-auto" onClick={() => onRemoveHandler()} />
          ) : (
            ''
          )}
        </div>
      </div>
      <div className="row">
        <div className="col">
          <hr className="m-2" style={{ color: 'black', size: '1px' }}></hr>
          <p>{post.text}</p>
          {/* {console.log(playlist)} */}
          {from === 'details' ? null : <Playlist playList={playlist} />}
        </div>
      </div>
    </div>
  );
};

// const stateToPropertyMapper = (state) => ({
//   profile: state.PostReducer.profile,
//   playlist: state.PostReducer.playlist,
//   image: state.PostReducer.image,
// });

// const propertyToDispatchMapper = (dispatch) => ({
//   findPost: (userId, playlistId) => {
//     Service.findProfile(userId).then((profile) => {
//       postindProfile(dispatch, profile);
//     });
//     Service.findImage(userId).then((sprofile) => {
//       postFindImage(dispatch, sprofile.images[0].url);
//     });
//     Service.getPlaylistInformation(playlistId).then((playlist) => {
//       postFindPlaylist(dispatch, playlist);
//     });
//   },
// });

// export default connect(stateToPropertyMapper, propertyToDispatchMapper)(Post);

export default Post;
