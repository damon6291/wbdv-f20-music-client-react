import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import sampleImg from '../../assets/damon.jpg';

const User = ({ img, name, followers }) => {
  return (
    <div className="container mt-4">
      <div className="d-flex align-items-center">
        <img src={img} alt="user" className="user-circle-image mr-2" />
        <div className="d-flex flex-column">
          <span>{name}</span>
          <span className="text-secondary">
            <small>{followers} followers</small>
          </span>
        </div>
        <button className="btn btn-danger h-25 ml-auto px-2 py-1">Follow</button>
      </div>
    </div>
  );
};

export default User;
