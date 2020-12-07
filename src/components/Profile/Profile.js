import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import { Navbar, Playlist, User } from "../index";
import backgroundImg from "../../assets/background.jpg";
import Utils from "../../utils/utils";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faCheck } from "@fortawesome/free-solid-svg-icons";
import { clienturl } from "../../utils/constant";

const Profile = ({
  ownerId,
  profile = [],
  findProfile,
  playlists = [],
  findPlaylists,
  image,
  userId,
  followUser,
  editProfile,
}) => {
  const exist = (item) => Utils.exist(item);
  const history = useHistory();
  const [showFollower, setShowFollower] = useState(true);
  const editable = ownerId === undefined || ownerId === userId;
  const [editState, setEditState] = useState(false);
  const [displayName, setDisplayName] = useState(profile.displayName);
  const [phone, setPhone] = useState(profile.phone);
  const [email, setEmail] = useState(profile.email);

  const stateSetter = (name, phone, email) => {
    setDisplayName(name);
    setPhone(phone);
    setEmail(email);
  };

  const getData = async () => {
    if (ownerId === undefined) {
      ownerId = userId;
    }

    findProfile(ownerId);
    findPlaylists(ownerId);
  };

  useEffect(() => {
    getData();
  }, [ownerId, userId, showFollower]);

  const onFollowHandler = async () => {
    await followUser(userId, ownerId);
    await findProfile(ownerId);
    history.push(`/Profile/${ownerId}`);
  };

  const refreshProfile = async () => {
    await findProfile(ownerId);
    console.log("refresh page");
    history.push(`/Profile/${ownerId}`);
  };

  const editStateHandler = (bool) => {
    stateSetter(profile.displayName, profile.phone, profile.email);
    setEditState(bool);
    if (!bool) {
      editProfile(userId, {
        userName: profile.userName,
        displayName: displayName,
        phone: phone,
        email: email,
        role: profile.role,
      });
      window.location.assign(`${clienturl}profile`);
    }
  };

  return (
    <React.Fragment>
      <Navbar />
      <div className=" animate__animated animate__fadeIn">
        <img
          src={backgroundImg}
          alt="background"
          className="background-image shadow"
        />
        <div className="container position-relative profile-position">
          <div className="d-flex align-items-end">
            <img
              src={image}
              alt="profile"
              className="profile-image border mr-4 shadow"
            />
            <div className="d-flex flex-column">
              <div className="d-flex align-items-center">
                {editState ? (
                  <input
                    id="displayName"
                    placeholder={
                      displayName === "" ? "Display Name" : displayName
                    }
                    type="text"
                    className="form-control shadow"
                    onChange={(e) => setDisplayName(e.target.value)}
                  />
                ) : (
                  <h4 className="mb-2">{profile.displayName}</h4>
                )}
              </div>
              <span className="text-secondary mb-2">
                <small>
                  Followers: {exist(profile) && profile.followers.length}
                </small>
              </span>
            </div>
            {editable ? (
              editState ? (
                <div className="d-flex flex-column ml-5">
                  <input
                    id="email"
                    placeholder={email === "" ? "Email" : email}
                    type="text"
                    className="form-control shadow"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    id="phone"
                    placeholder={phone === "" ? "Phone" : phone}
                    type="text"
                    className="form-control shadow"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              ) : (
                <div className="d-flex flex-column ml-5">
                  <span className="mb-2 font-italic">
                    {exist(profile) && profile.email}{" "}
                  </span>
                  <span className="mb-2 font-italic">
                    {exist(profile) && profile.phone}{" "}
                  </span>
                </div>
              )
            ) : null}

            {userId === "" ? null : editable ? (
              <FontAwesomeIcon
                icon={editState ? faCheck : faPencilAlt}
                className="ml-auto mb-4"
                onClick={() => editStateHandler(!editState)}
              />
            ) : (
              <button
                className="btn btn-danger h-25 ml-auto px-2 py-1 mb-4"
                onClick={() => onFollowHandler()}
              >
                Follow
              </button>
            )}
          </div>

          <div className="d-flex row mt-5">
            <div className="col-md-8 col-sm-12">
              <div className="w-75">
                <div className="border-bottom pl-4 pb-3">
                  <h3>Playlists</h3>
                </div>
                {exist(playlists) &&
                  playlists.map((playList, id) => {
                    return <Playlist key={id} playList={playList} />;
                  })}
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              {/* <div className="w-100"> */}
              <div
                className="border-bottom pl-4 pb-3 row"
                onClick={() => setShowFollower(!showFollower)}
              >
                <h3 className={showFollower ? "" : "text-muted"}>Follower</h3>{" "}
                &nbsp; <h3>/</h3> &nbsp;{" "}
                <h3 className={showFollower ? "text-muted" : ""}>Following</h3>
              </div>
              {showFollower
                ? exist(profile) &&
                  exist(profile.followers) &&
                  profile.followers.map((user, id) => {
                    return <User key={id} ownerId={user} showFollower={true} />;
                  })
                : exist(profile) &&
                  exist(profile.followings) &&
                  profile.followings.map((user, id) => {
                    return (
                      <User
                        key={id}
                        ownerId={user}
                        showFollower={false}
                        refreshProfile={refreshProfile}
                      />
                    );
                  })}
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Profile;
