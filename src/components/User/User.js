import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Service from '../../services/Services';

const User = ({
  ownerId: { _id },
  userId,
  showFollower,
  followUser,
  removeUser,
  refreshProfile,
}) => {
  const [name, setName] = useState('');
  const [followers, setFollowers] = useState([]);
  const [image, setImage] = useState('');

  useEffect(() => {
    console.log(_id);
    Service.findProfile(_id).then((result) => {
      setName(result.displayName);
      setFollowers(result.followers);
    });
    Service.findImage(_id).then((result) => {
      setImage(result.images[0].url);
    });
  }, [_id]);

  const onFollowHandler = async () => {
    await followUser(userId, _id);
  };

  const onRemoveHandler = async () => {
    await removeUser(userId, _id);
    refreshProfile();
  };

  return (
    <div className="container mt-4">
      <div className="d-flex align-items-center">
        <img src={image} alt="user" className="user-circle-image mr-2" />
        <div className="d-flex flex-column">
          <Link to={`/Profile/${_id}`} className="text-dark">
            {name ? name : 'Null Name'}
          </Link>
          <span className="text-secondary text-right">
            <small>{followers.length} followers</small>
          </span>
        </div>
        {userId === '' || userId === _id ? ( //user is not logged in or user is myself
          ''
        ) : showFollower ? (
          <button
            className="btn btn-danger h-25 ml-auto px-2 py-1"
            onClick={() => onFollowHandler()}>
            Follow
          </button>
        ) : (
          <button
            className="btn btn-danger h-25 ml-auto px-2 py-1"
            onClick={() => onRemoveHandler()}>
            Remove
          </button>
        )}
      </div>
    </div>
  );
};

const stateToPropertyMapper = (state) => ({
  userId: state.LoginReducer.userId,
});
const propertyToDispatchMapper = (dispatch) => ({
  followUser: (from, to) => Service.followUser(from, to).then((result) => console.log(result)),
  removeUser: (from, to) => Service.removeFollower(from, to).then((result) => console.log(result)),
});

export default connect(stateToPropertyMapper, propertyToDispatchMapper)(User);
