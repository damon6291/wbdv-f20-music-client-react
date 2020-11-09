import React, { useEffect } from 'react';
import Navigation from './Navigation.js';
import './HomePage.css';
import MusicBox from './MusicBox.js';
import PostGenerator from './PostGenerator.js';
import Post from './Posts';

const HomePage = ({ playLists = [], findPlayLists }) => {
  useEffect(() => {
    const getData = async () => {
      await findPlayLists({ searchParams: 'top' });
    };
    getData();
  }, []);

  return (
    <div className="scroll_Here row" style={{ background: '#657786' }}>
      {console.log(playLists)}
      <div style={{ float: 'left', marginLeft: '30px', width: '20%' }}>
        <Navigation />
      </div>
      <div style={{ width: '50%', overflow: 'auto', scrollBehavior: 'smooth' }}>
        <PostGenerator />
        <Post />
        <Post />
      </div>
      <div style={{ position: 'absolute', float: 'right', marginTop: '50px', right: '20px' }}>
        <input
          className="input_s form-control"
          placeholder="Search for Posts/Music here!"
          style={{
            position: 'relative',
            marginTop: '50px',
            marginRight: '100px',
            marginBottom: '100px',
          }}
        />
        <div className="search">
          <h5 style={{ textAlign: 'center' }}> Top Tracks USA </h5>
          <MusicBox />
          <MusicBox />
          <MusicBox />
          <MusicBox />
          <MusicBox />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
