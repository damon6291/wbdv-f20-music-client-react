import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, User, Playlist } from '../index';
import { clienturl } from '../../utils/constant';

const Search = ({ playLists = [], findPlayLists, findUsers, users = [], input }) => {
  const [query, setQuery] = useState(input);

  const onSearchHandler = (e) => {
    if (e.key === 'Enter') {
      window.location.assign(`${clienturl}search/${query}`);
    }
  };

  useEffect(() => {
    if (input !== undefined) {
      findPlayLists(query);
      findUsers(query);
    }
  }, [input]);

  return (
    <React.Fragment>
      <Navbar />
      {console.log(users)}
      <div className="container animate__animated animate__fadeIn">
        <div className="d-flex flex-column justify-content-center">
          <input
            type="text"
            placeholder="Search..."
            className="w-75 mx-auto my-5 search-box px-2 py-2 shadow"
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => onSearchHandler(e)}
          />
          <div className="d-flex">
            <div className="col-8">
              <div className="w-75">
                <h3 className="border-bottom pl-4 pb-3">Playlists</h3>

                {playLists.map((playList, id) => {
                  return <Playlist key={id} playList={playList} />;
                })}
              </div>
            </div>
            <div className="col-4">
              <div className="w-100">
                <h3 className="border-bottom pl-4 pb-3">Users</h3>
                {users.map((user, id) => {
                  console.log(user);
                  return <User key={id} userId={user} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Search;
