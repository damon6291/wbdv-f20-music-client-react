import React, { useState, useEffect } from "react";
import { Playlist } from "../index";
import Service from "../../services/Services";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Post = ({ post, userId = "", refreshPost, from = "" }) => {
  const [playlist, setPlaylist] = useState([]);
  const [profile, setProfile] = useState([]);
  const [image, setImage] = useState("");

  useEffect(() => {
    const getData = async () => {
      await Service.getPlaylistInformation(post.playlistId).then((response) =>
        setPlaylist(response)
      );
      await Service.findProfile(post.userId).then((response) =>
        setProfile(response)
      );
      await Service.findImage(post.userId).then((response) => {
        try {
          setImage(response.images[0].url);
        } catch (error) {
          setImage(
            "https://moonvillageassociation.org/wp-content/uploads/2018/06/default-profile-picture1.jpg"
          );
        }
      });
    };
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onRemoveHandler = async () => {
    await Service.removePost(post._id).then((response) =>
      console.log(response)
    );
    refreshPost();
  };

  return (
    <div className="container-fluid m-2 webdv-playlist-style">
      <div className="row">
        <div className="col d-flex flex-row align-items-center">
          <img
            style={{ height: "30px" }}
            alt="user"
            className="rounded-circle mt-1 mr-2"
            src={image}
          />
          <Link
            to={`/Profile/${profile._id}`}
            className="mt-2 font-weight-bold text-dark"
          >
            {profile.displayName}
          </Link>
          {userId === post.userId ? (
            <FontAwesomeIcon
              icon={faTimes}
              className="ml-auto"
              onClick={() => onRemoveHandler()}
            />
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="row">
        <div className="col">
          <hr className="m-2" style={{ color: "black", size: "1px" }}></hr>
          <p>{post.text}</p>
          {/* {console.log(playlist)} */}
          {from === "details" ? null : <Playlist playList={playlist} />}
        </div>
      </div>
    </div>
  );
};

export default Post;
