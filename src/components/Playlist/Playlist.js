import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import Utils from '../../utils/utils';
import { Link } from 'react-router-dom';

const Playlist = ({ playList: { id, name, description, images, owner } }) => {
  return (
    <div className="container mt-4">
      <div className="d-flex align-items-center">
        <img
          src={images.length > 0 ? images[0].url : null}
          alt="playlist"
          className="playlist-image mr-5"
        />
        <div className="d-flex flex-column">
          <Link to={`/Details/${id}`} className="text-dark">
            {name ? name : 'Null Name'}
          </Link>
          <span>
            <small>{description.length < 55 ? description : Utils.cutWord(description, 55)}</small>
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
