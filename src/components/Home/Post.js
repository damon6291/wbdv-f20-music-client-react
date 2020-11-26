import React from 'react';

import exampleImg from '../../assets/damon.jpg';
import { Playlist } from '../index';

const Post = ({ postData }) => {
  return (
    <div className="container m-2 webdv-playlist-style">
      <div className="row">
        <div className="col d-flex flex-row ">
          <img
            style={{ height: '30px' }}
            alt="user"
            className="rounded-circle mt-1 mr-2"
            src={exampleImg}
          />
          <span className="mt-2 font-weight-bold">@username</span>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <hr className="m-2" style={{ color: 'black', size: '1px' }}></hr>
          <p>Check out some of my favorite songs on my new playlist. Let me know if you like it!</p>
          <Playlist
            playList={{
              id: '',
              images: [
                {
                  url: 'https://upload.wikimedia.org/wikipedia/en/9/93/KendrickGKMC.jpg',
                },
              ],
              name: 'Title goes here',
              description: 'Something',
              owner: { display_name: 'someUsername' },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Post;
