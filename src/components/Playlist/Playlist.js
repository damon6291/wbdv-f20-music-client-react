import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import Utils from '../../utils/utils';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const Playlist = ({ playList: { id, name, description, images, owner } }) => {
  const history = useHistory();

  useEffect(() => {}, [id]);

  return (
    <div className="container my-3 webdv-small-playlist-style">
      <div className="d-flex align-items-center">
        <img
          src={images !== undefined && images.length > 0 ? images[0].url : null}
          alt="playlist"
          className="playlist-image m-2 mr-4"
        />
        <div className="d-flex flex-column">
          <Link to={`/Details/${id}`} className="text-dark">
            {name ? name : 'Null Name'}
          </Link>
          <span>
            <small>
              {description !== undefined
                ? description.length < 55
                  ? description
                  : Utils.cutWord(description, 55)
                : ''}
            </small>
          </span>
          <small className="text-secondary">
            Created by {owner !== undefined && owner.display_name}
          </small>
        </div>
      </div>
    </div>
  );
};

export default Playlist;
