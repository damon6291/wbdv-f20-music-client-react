import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import Services from '../../services/Services';
import { Link } from 'react-router-dom';

const User = ({ userId: { _id } }) => {
  const [name, setName] = useState('');
  const [followers, setFollowers] = useState([]);
  const [image, setImage] = useState('');

  useEffect(() => {
    console.log(_id);
    Services.findProfile(_id).then((result) => {
      setName(result.userName);
      setFollowers(result.followers);
    });
    Services.findImage(_id).then((result) => {
      console.log(result);
      setImage(result.images[0].url);
    });
  }, [_id]);

  return (
    <div className="container mt-4">
      <div className="d-flex align-items-center">
        <img src={image} alt="user" className="user-circle-image mr-2" />
        <div className="d-flex flex-column">
          <Link to={`/Profile/${_id}`} className="text-dark">
            {name ? name : 'Null Name'}
          </Link>
          <span className="text-secondary">
            <small>{followers.length} followers</small>
          </span>
        </div>
        <button className="btn btn-danger h-25 ml-auto px-2 py-1">Follow</button>
      </div>
    </div>
  );
};

export default User;
