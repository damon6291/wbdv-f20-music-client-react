import React from 'react';
import './App.css';
import { Login, Register, Profile } from './components/index';
import { SearchContainer, DetailsContainer } from './containers/index';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
// for small Playlist widget || used on User Profile page
import playListReducer from './reducers/playListReducer';
// for large Playlist display || used on PlaylistDetails page || includes inner track details
import DetailsReducer from './reducers/DetailsReducer';

const allReducer = combineReducers({
  playListReducer,
  DetailsReducer,
});

const store = createStore(allReducer);

function App() {
  return (
    <Provider store={store}>
      <Router>
        {/* <Link to="/Details">Details</Link>
        <Link to="/Home">Home</Link>
        <Link to="/Login">Login</Link>
        <Link to="/Register">Register</Link>
        <Link to="/Profile">Profile</Link>
        <Link to="/Search">Search</Link> */}
        <Route
          path="/Details/:playlistId"
          render={(props) => (
            <DetailsContainer {...props} playlistId={props.match.params.playlistId} />
          )}
        />
        <Route path="/Home" component={SearchContainer.Home} />
        <Route path="/Login" component={Login} />
        <Route path="/Register" component={Register} />
        <Route path="/Profile" component={Profile} />
        <Route path="/Search" component={SearchContainer.Search} />
      </Router>
    </Provider>
  );
}

export default App;
