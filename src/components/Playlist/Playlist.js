import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import Utils from '../../utils/utils';
import { Link } from 'react-router-dom';
import Services from '../../services/Services';
import { useHistory } from 'react-router-dom';

const Playlist = ({ playList: { id, name, description, images, owner } }) => {
  const history = useHistory();

  useEffect(() => {}, [id]);

  return (
    <div className="container my-3 webdv-small-playlist-style">
      <div className="d-flex align-items-center">
        <img
          src={images.length > 0 ? images[0].url : null}
          alt="playlist"
          className="playlist-image m-2 mr-4"
        />
        <div className="d-flex flex-column">
          <Link to={`/Details/${id}`} className="text-dark">
            {name ? name : 'Null Name'}
          </Link>
          <span>
            <small>{description.length < 55 ? description : Utils.cutWord(description, 55)}</small>
          </span>
          <a className="text-secondary" href={Utils.exist(owner) ? '' : ''}>
            <small>Created by {owner.display_name}</small>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Playlist;
