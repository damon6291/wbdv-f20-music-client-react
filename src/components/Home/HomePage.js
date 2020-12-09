import React, { useEffect } from 'react';
import './HomePage.css';
import Post from './Post';
import { Playlist, Navbar } from '../index';
import PostCreator from './PostCreator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserCircle,
  faSearch,
  faSignOutAlt,
  faSignInAlt,
  faArrowAltCircleUp,
  faClipboard,
  faComments,
} from '@fortawesome/free-solid-svg-icons';
import { Link, useHistory } from 'react-router-dom';
import Utils from '../../utils/utils';
import { clienturl } from '../../utils/constant';

const HomePage = ({
  findProfile,
  userId,
  findPlaylist,
  playlist = [],
  playlistId,
  posts = [],
  findPosts,
  logOut,
  profile = [],
}) => {
  const history = useHistory();

  useEffect(() => {
    if (userId !== '') {
      findProfile(userId);
    }
    findPlaylist('top');
    findPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  const refreshPost = async () => {
    await findPosts();
    console.log(posts);
    window.location.assign(`${clienturl}Home`);
  };

  const logOutHandler = () => {
    logOut();
    history.push('/Home');
  };

  return (
    <React.Fragment>
      <Navbar />
      <div className="container-fluid animate__animated animate__fadeIn">
        <div className="row">
          <div
            className="col-md-2 mt-3"
            style={
              {
                // borderRight: "solid 2px black",
                // borderLeft: "solid 1px black",
                // borderRadius: "40px",
                // backgroundColor: "#D5C5C8",
                // opacity: "85%"
              }
            }>
            {userId !== '' ? (
              <div className="flex-column align-self-center d-none d-md-flex">
                <Link
                  style={{ textDecoration: 'none' }}
                  className="shadow-lg btn-lg btn-dark mt-5"
                  to={`/Profile`}>
                  <FontAwesomeIcon icon={faUserCircle} />
                  <br />
                  My Profile
                </Link>
                <Link
                  style={{ textDecoration: 'none' }}
                  className="shadow-lg btn-lg btn-info mt-2"
                  to="/Search">
                  <FontAwesomeIcon icon={faSearch} />
                  <br />
                  Search
                </Link>
                <Link
                  style={{ textDecoration: 'none' }}
                  className=" shadow-lg btn-lg btn-danger mt-2"
                  to="/Home"
                  onClick={() => logOutHandler()}>
                  <FontAwesomeIcon icon={faSignOutAlt} />
                  <br />
                  Log out
                </Link>
              </div>
            ) : (
              <div className=" flex-column align-self-center d-none d-md-flex">
                <Link
                  style={{ textDecoration: 'none !important' }}
                  className="btn btn-lg btn-primary mt-5"
                  to="/Register">
                  <FontAwesomeIcon icon={faUserCircle} />
                  <br />
                  Register
                </Link>

                <Link
                  style={{ textDecoration: 'none !important' }}
                  className="btn btn-lg btn-light mt-2"
                  to="/Login">
                  <FontAwesomeIcon icon={faSignInAlt} />
                  <br />
                  Log in
                </Link>
              </div>
            )}
          </div>

          <div className="col-12 col-md-7 mt-3">
            {userId !== '' ? (
              <React.Fragment>
                <h4 className="text-right font-weight-bold">
                  <span className="webdv-title-style">
                    &nbsp;&nbsp;
                    <FontAwesomeIcon icon={faClipboard} />
                    &nbsp;New post&nbsp;
                  </span>
                </h4>
                <PostCreator userId={userId} playlistId={playlistId} refreshPost={refreshPost} />
              </React.Fragment>
            ) : (
              <span></span>
            )}

            <h4 className="mb-3 text-right font-weight-bold">
              <span className="webdv-title-style">
                &nbsp;
                <FontAwesomeIcon icon={faComments} />
                &nbsp;Latest feed&nbsp;
              </span>
            </h4>
            {posts.map((post, id) => {
              return <Post key={id} post={post} userId={userId} refreshPost={refreshPost} />;
            })}
          </div>

          <div className="col-md-3 d-none d-md-block mt-3">
            {userId !== '' ? (
              <div className="d-flex flex-column justify-content-start pb-2">
                <h4 className="text-center font-weight-bold">
                  <span className="webdv-title-style">
                    &nbsp;
                    <FontAwesomeIcon icon={faSearch} />
                    &nbsp;Your history&nbsp;
                  </span>
                </h4>
                <ul className="list-group">
                  {Utils.exist(profile)
                    ? profile.search.map((item, id) => {
                        if (item !== null) {
                          return (
                            <li className="list-group-item" key={id}>
                              {Utils.exist(item) ? (
                                <Link to={`/Search/${item.query}`}>{item.query}</Link>
                              ) : null}
                            </li>
                          );
                        } else {
                          return null;
                        }
                      })
                    : null}
                </ul>
              </div>
            ) : (
              <span></span>
            )}

            <div
              style={{
                borderRadius: '40px',
                backgroundColor: '#D5C5C8',
                opacity: '85%',
              }}>
              <span>&nbsp;</span>
              <h4 className="text-center font-weight-bold">
                <span className="webdv-title-style">
                  &nbsp;
                  <FontAwesomeIcon icon={faArrowAltCircleUp} />
                  &nbsp;Trending music&nbsp;
                </span>
              </h4>
              <hr></hr>
              {playlist.map((item, id) => {
                return <Playlist key={id} playList={item} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
