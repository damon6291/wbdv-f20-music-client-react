import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareSquare, faStar, faMusic } from '@fortawesome/free-solid-svg-icons';

import PlaylistItem from './PlaylistItem.js';
import 'animate.css';
import Utils from '../../utils/utils';

const Details = ({ playlistId, details = [], findDetails, totalRuntime }) => {
  const getData = async () => {
    const json = { playlistId: playlistId };
    const data = await findDetails(json);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="container">
      {console.log(details)}
      <div className="row">
        <div className="col">
          <p>Navbar component goes here</p>
        </div>
      </div>
      <div className="row">
        <div className="col-8 shadow-lg webdv-playlist-style animate__animated animate__slideInLeft">
          <div className="d-flex flex-column align-items-end animate__animated animate__fadeIn animate__slow">
            <h2 className="mt-3 font-weight-bold">
              <FontAwesomeIcon icon={faMusic} />
              &nbsp;{details.name} &nbsp;
              <small>
                by {JSON.stringify(details).length > 2 ? details.owner.display_name : null}
              </small>
            </h2>
            <h5 className="text-muted">{details.description}</h5>
            <h6 className="text-muted">total runtime - {Utils.msToHMS(totalRuntime)}</h6>
            <hr
              style={{
                width: '100%',
                border: '2px dashed #C9E4D1',
              }}
            />
          </div>

          {JSON.stringify(details).length > 2
            ? details.tracks.items.map((item, id) => {
                return (
                  <span key={id}>
                    <PlaylistItem
                      title={item.track.name}
                      artist={item.track.artists[0].name}
                      runtime={item.track.duration_ms}
                      coverImg={item.track.album.images[0].url}
                    />
                    <hr />
                  </span>
                );
              })
            : null}
        </div>

        <div className="col-4 d-flex flex-column mt-5">
          <button className="m-1 btn btn-primary shadow font-weight-light animate__animated animate__flipInX">
            <FontAwesomeIcon icon={faShareSquare} />
            &nbsp; Share to profile
          </button>
          <button className="m-1 btn btn-primary shadow font-weight-light animate__animated animate__flipInX">
            <FontAwesomeIcon icon={faStar} />
            &nbsp; Import to library
          </button>
          <button className="m-1 btn btn-light shadow font-weight-light animate__animated animate__flipInX">
            ...
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
