import React, { useState, useEffect } from 'react';
import { Playlist } from '../index';
import Service from '../../services/Services';

const Post = ({ post, userId, refreshPost }) => {
  const [playlist, setPlaylist] = useState([]);
  const [profile, setProfile] = useState([]);
  const [image, setImage] = useState('');

  useEffect(() => {
    const getData = async () => {
      Service.getPlaylistInformation(post.playlistId).then((response) => setPlaylist(response));
      Service.findProfile(post.userId).then((response) => setProfile(response));
      await Service.findImage(post.userId).then((response) => setImage(response.images[0].url));
    };
    getData();
  }, []);

  const onRemoveHandler = async () => {
    await Service.removePost(post._id).then((response) => console.log(response));
    refreshPost();
  };

  return (
    <div className="container m-2 webdv-playlist-style">
      <div className="row">
        <div className="col d-flex flex-row ">
          <img
            style={{ height: '30px' }}
            alt="user"
            className="rounded-circle mt-1 mr-2"
            src={image}
          />
          <span className="mt-2 font-weight-bold">{profile.displayName}</span>
          {userId === post.userId ? (
            <button className="ml-auto" onClick={() => onRemoveHandler()}>
              x
            </button>
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
          <Playlist playList={playlist} />
        </div>
      </div>
    </div>
  );
};

export default Post;
