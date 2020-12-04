import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import Service from '../../services/Services';
import { Link } from 'react-router-dom';

const PostCreator = ({ userId, playlistId, refreshPost }) => {
  const [text, setText] = useState('');

  const onSubmitHandler = async () => {
    console.log('submit');
    playlistId !== undefined
      ? await Service.createPost({
          text: text,
          userId: userId,
          playlistId: playlistId,
        }).then((result) => console.log(result))
      : alert('Please attach playlist first');
    refreshPost();
  };

  return (
    <div
      // style={{ border: "solid 1px black", borderRadius: "15px" }}
      className="container webdv-postgen-style my-3">
      <div className="d-flex">
        {/* {console.log(playlistId)} */}
        <textarea
          placeholder="Attach playlist before typing..."
          className="form-control mt-2"
          style={{ outline: 'none' }}
          onChange={(e) => setText(e.target.value)}
          rows="2"></textarea>
        <button
          className="ml-1 mt-2 btn btn-outline-dark  d-flex align-content-center justify-content-center align-items-center"
          onClick={() => onSubmitHandler()}>
          <FontAwesomeIcon icon={faPlusSquare} />
        </button>
      </div>
      <div className="d-flex justify-content-end mt-1">
        {playlistId !== undefined ? (
          <h5>PlaylistId: {playlistId}</h5>
        ) : (
          <Link className="font-weight-bold mb-2" to="/Search">
            Attach a playlist...
          </Link>
        )}
      </div>
    </div>
  );
};

export default PostCreator;
