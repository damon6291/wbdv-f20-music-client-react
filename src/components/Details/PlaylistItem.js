import React, { Component } from 'react';
import Utils from '../../utils/utils';
// import { bounceIn } from "animate.css";
//import "animate.css";

const PlaylistItem = ({ title, artist, runtime, coverImg }) => {
  return (
    <div className="d-flex flex-row justify-content-between align-items-center ">
      <div className="d-flex flex-row align-items-center  animate__animated animate__flipInX animate__slow">
        <img
          src={coverImg}
          className="m-1"
          style={{
            height: '75px',
            width: '75px',
            border: 'solid 1px black',
            borderRadius: '5px',
          }}
        />
        <div className="d-flex flex-column ml-2">
          <h5>{title}</h5>
          <h6 className="text-muted">by {artist}</h6>
        </div>
      </div>

      <span className="float-right font-italic">{Utils.msToMin(runtime)}</span>
    </div>
  );
};

export default PlaylistItem;
