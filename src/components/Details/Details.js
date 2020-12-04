import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareSquare, faStar, faMusic } from '@fortawesome/free-solid-svg-icons';

import PlaylistItem from './PlaylistItem.js';
import Navbar from '../Navbar/Navbar';
import Post from '../Home/Post';
import 'animate.css';
import Utils from '../../utils/utils';

const Details = ({ playlistId, details = [], findDetails, totalRuntime, userId }) => {
  const images = details.images;
  const externalUrl = details.external_urls;

  const exist = (item) => Utils.exist(item);

  const getData = async () => {
    await findDetails(playlistId);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <React.Fragment>
      <Navbar />
      <div className="container mt-4">
        {console.log(details)}
        <div className="row">
          <div className="col-8 shadow-lg webdv-playlist-style animate__animated animate__slideInLeft">
            <div className="d-flex flex-column animate__animated animate__fadeIn animate__slow">
              <div className="d-flex justify-content-between align-items-center">
                <a
                  className="pr-2"
                  href={exist(details) && exist(externalUrl) ? externalUrl.spotify : null}>
                  <img
                    style={{
                      height: '90px',
                      width: '90px',
                      border: 'solid 1px black',
                      borderRadius: '5px',
                    }}
                    src={exist(details) && exist(images) ? images[0].url : null}
                    alt="playlist"
                  />
                </a>
                <div className="d-flex flex-column align-items-end">
                  <h2 className="mt-3 font-weight-bold">
                    <FontAwesomeIcon icon={faMusic} />
                    &nbsp;{details.name} &nbsp;
                    <a
                      className="text-secondary"
                      href={exist(details) ? details.owner.external_urls.spotify : ''}>
                      <small>by {exist(details) ? details.owner.display_name : null}</small>
                    </a>
                  </h2>
                  <h5 className="text-muted">{details.description}</h5>
                  <h6 className="text-muted">total runtime - {Utils.msToHMS(totalRuntime)}</h6>
                </div>
              </div>
              <hr
                style={{
                  width: '100%',
                  border: '2px dashed #C9E4D1',
                }}
              />
            </div>

            {exist(details)
              ? details.tracks.items.map((item, id) => {
                  return (
                    <span key={id}>
                      <PlaylistItem
                        title={item.track.name}
                        artist={item.track.artists[0].name}
                        runtime={item.track.duration_ms}
                        coverImg={item.track.album.images[0].url}
                        externalUrl={item.track.external_urls.spotify}
                      />
                      <hr />
                    </span>
                  );
                })
              : null}
          </div>

          <div className="col-4 d-flex flex-column mt-5">
            <h4 className="d-flex align-self-center">Enjoying this playlist?</h4>
            <Link
              to={`/Home/${playlistId}`}
              className="m-1 btn btn-primary shadow font-weight-light animate__animated animate__flipInX">
              <FontAwesomeIcon icon={faShareSquare} />
              &nbsp; Share to my feed
            </Link>
            <hr
              style={{
                width: '100%',
                border: '1px solid #C9E4D1',
              }}
            />
            <h4 className="d-flex align-self-center">Posts about this</h4>
            {/* Need backend to be able to properly fetch posts, dummy posts will cause crash */}
            {/* <Post></Post> */}
            {/* <button className="m-1 btn btn-primary shadow font-weight-light animate__animated animate__flipInX">
              <FontAwesomeIcon icon={faStar} />
              &nbsp; Import to library
            </button>
            <button className="m-1 btn btn-light shadow font-weight-light animate__animated animate__flipInX">
              ...
            </button> */}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Details;
