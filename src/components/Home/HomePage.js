import React, { useEffect } from "react";
import "./HomePage.css";

import Navbar from "../Navbar/Navbar";
import Post from "./Post";
import Playlist from "../Playlist/Playlist";
import PostCreator from "./PostCreator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faSearch,
  faSignOutAlt,
  faSignInAlt,
  faArrowAltCircleUp,
  faClipboard,
  faComments,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const HomePage = ({ playLists = [], findPlayLists, loggedIn }) => {
  useEffect(() => {
    const getData = async () => {
      await findPlayLists("top");
    };
    // getData();
  }, []);

  return (
    <React.Fragment>
      <Navbar loggedIn={loggedIn} />
      <div className="container-fluid animate__animated animate__fadeIn">
        <div className="row">
          <div
            className="col-2 mt-3"
            style={{
              borderRight: "solid 1px black",
              // borderLeft: "solid 1px black",
              borderRadius: "40px",
            }}
          >
            {loggedIn ? (
              <div className="d-flex flex-column align-self-center">
                <Link className="btn btn-lg btn-dark mt-5" to="/Profile">
                  <FontAwesomeIcon icon={faUserCircle} />
                  <br />
                  My Profile
                </Link>
                <Link className="btn btn-lg btn-info mt-2" to="/Search">
                  <FontAwesomeIcon icon={faSearch} />
                  <br />
                  Search
                </Link>
                <Link className="btn btn-lg btn-danger mt-2" to="/Home">
                  <FontAwesomeIcon icon={faSignOutAlt} />
                  <br />
                  Log out
                </Link>
              </div>
            ) : (
              <div className="d-flex flex-column align-self-center">
                <Link className="btn btn-lg btn-primary mt-5" to="/Profile">
                  <FontAwesomeIcon icon={faUserCircle} />
                  <br />
                  Register
                </Link>

                <Link className="btn btn-lg btn-light mt-2" to="/Login">
                  <FontAwesomeIcon icon={faSignInAlt} />
                  <br />
                  Log in
                </Link>
              </div>
            )}
          </div>
          <div className="col-7 mt-3">
            {loggedIn ? (
              <React.Fragment>
                <h4 className="text-right font-weight-bold">
                  <FontAwesomeIcon icon={faClipboard} />
                  &nbsp;New post
                </h4>
                <PostCreator />
              </React.Fragment>
            ) : (
              <span></span>
            )}

            <h4 className="text-right font-weight-bold">
              <FontAwesomeIcon icon={faComments} />
              &nbsp;Latest feed
            </h4>
            <Post />
            <Post />
            <Post />
          </div>
          <div
            className="col-3 mt-3"
            style={{
              borderLeft: "solid 1px black",
              borderRadius: "40px",
            }}
          >
            <h4 className="text-center font-weight-light">
              <FontAwesomeIcon icon={faArrowAltCircleUp} />
              &nbsp; Trending music
            </h4>
            <hr></hr>
            {/* Replace dummy objects with a mapping over Spotify API call w/ preset search phrase, then parse*/}
            <Playlist
              playList={{
                id: "",
                images: [
                  {
                    url:
                      "https://upload.wikimedia.org/wikipedia/en/a/ae/Drake_-_Take_Care_cover.jpg",
                  },
                ],
                name: "Playlist title",
                description: "A description would be here",
                owner: { display_name: "user1" },
              }}
            />
            <Playlist
              playList={{
                id: "",
                images: [
                  {
                    url:
                      "https://upload.wikimedia.org/wikipedia/en/c/c8/CarterIII.jpg",
                  },
                ],
                name: "Example",
                description: "Something",
                owner: { display_name: "anotherUser" },
              }}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
