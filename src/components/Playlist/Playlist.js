import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import { Link } from 'react-router-dom';

const Playlist = ({ playList: { id, name, description, images, owner } }) => {
  const cutWord = (word, index) => {
    return word.slice(0, index) + '...';
  };

  return (
    <div className="container mt-4">
      <div className="d-flex align-items-center">
        <img src={images[0].url} alt="user" className="playlist-image mr-5" />
        <div className="d-flex flex-column">
          <Link to={`/Details/${id}`} className="text-dark">
            {name ? name : 'Null Name'}
          </Link>
          <span>
            <small>{description.length < 55 ? description : cutWord(description, 55)}</small>
          </span>
          <span className="text-secondary">
            <small>Created by {owner.display_name}</small>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Playlist;
