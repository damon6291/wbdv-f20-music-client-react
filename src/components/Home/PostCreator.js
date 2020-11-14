import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";

const PostCreator = () => {
  return (
    <div className="container my-3">
      <div className="d-flex">
        <textarea
          placeholder="Speak your mind..."
          class="form-control"
          style={{ outline: "none" }}
          rows="2"
        ></textarea>
        <button class="ml-1 btn btn-outline-dark  d-flex align-content-center justify-content-center align-items-center">
          <FontAwesomeIcon icon={faPlusSquare} />

          {/* <b>Post to feed</b> */}
        </button>
      </div>
      <div className="d-flex justify-content-end mt-1">
        <a className="font-weight-bold" href="#!">
          Attach a playlist...
        </a>
      </div>
      <hr></hr>
    </div>
  );
};

export default PostCreator;
