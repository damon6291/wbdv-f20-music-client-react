import React from 'react';
import './App.css';
import { Register, Home } from './components/index';
import { SearchContainer, DetailsContainer, ProfileContainer } from './containers/index';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
// for small Playlist widget || used on User Profile page
import playListReducer from './reducers/playListReducer';
// for large Playlist display || used on PlaylistDetails page || includes inner track details
import DetailsReducer from './reducers/DetailsReducer';
import ProfileReducer from './reducers/ProfileReducer';

const allReducer = combineReducers({
  playListReducer,
  DetailsReducer,
  ProfileReducer,
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
        <Route path="/" exact component={Home} />
        <Route path="/Home" exact component={Home} />
        <Route path="/Login" component={ProfileContainer.Login} />
        <Route path="/Register" component={Register} />
        <Route
          path="/Profile/:ownerId"
          render={(props) => <ProfileContainer.Profile ownerId={props.match.params.ownerId} />}
        />
        <Route path="/Search" exact component={SearchContainer.Search} />
        <Route
          path="/Search/:query"
          exact
          render={(props) => <SearchContainer.Search input={props.match.params.query} />}
        />
      </Router>
    </Provider>
  );
}

export default App;
