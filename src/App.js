import React, { useEffect } from 'react';
import './App.css';
import { Register, Home } from './components/index';
import {
  SearchContainer,
  DetailsContainer,
  ProfileContainer,
  HomeContainer,
  LoginContainer,
} from './containers/index';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
// for small Playlist widget || used on User Profile page
import playListReducer from './reducers/playListReducer';
// for large Playlist display || used on PlaylistDetails page || includes inner track details
import DetailsReducer from './reducers/DetailsReducer';
import ProfileReducer from './reducers/ProfileReducer';
import HomeReducer from './reducers/HomeReducer';
import LoginReducer from './reducers/LoginReducer';
import Service from './services/Services';

const allReducer = combineReducers({
  playListReducer,
  DetailsReducer,
  ProfileReducer,
  HomeReducer,
  LoginReducer,
});

const store = createStore(allReducer);

function App() {
  useEffect(() => {
    // if (Service.findCurrentUser() !== undefined) {
    //   Service.findCurrentUser().then((result) => console.log(result));
    // }
  });
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
        <Route path="/" exact component={HomeContainer} />
        <Route path="/Home" exact component={HomeContainer} />
        <Route
          path="/Home/:playlistId"
          exact
          render={(props) => <HomeContainer playlistId={props.match.params.playlistId} />}
        />
        <Route path="/Login" component={LoginContainer} />
        <Route path="/Register" component={Register} />
        <Route
          path="/Profile/:ownerId"
          render={(props) => <ProfileContainer ownerId={props.match.params.ownerId} />}
        />
        <Route path="/Search" exact component={SearchContainer} />
        <Route
          path="/Search/:query"
          exact
          render={(props) => <SearchContainer input={props.match.params.query} />}
        />
      </Router>
    </Provider>
  );
}

export default App;
