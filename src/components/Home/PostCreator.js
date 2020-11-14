import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";

const PostCreator = () => {
  return (
    <div
      // style={{ border: "solid 1px black", borderRadius: "15px" }}
      className="container webdv-postgen-style my-3"
    >
      <div className="d-flex">
        <textarea
          placeholder="Speak your mind..."
          class="form-control mt-2"
          style={{ outline: "none" }}
          rows="2"
        ></textarea>
        <button class="ml-1 mt-2 btn btn-outline-dark  d-flex align-content-center justify-content-center align-items-center">
          <FontAwesomeIcon icon={faPlusSquare} />
        </button>
      </div>
      <div className="d-flex justify-content-end mt-1">
        <a className="font-weight-bold mb-2" href="#!">
          Attach a playlist...
        </a>
      </div>
    </div>
  );
};

export default PostCreator;
