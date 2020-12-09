import React from 'react';
import './App.css';
import { Register, AdminPanel, UserEdit } from './components/index';
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
import AdminReducer from './reducers/AdminReducer';

const allReducer = combineReducers({
  playListReducer,
  DetailsReducer,
  ProfileReducer,
  HomeReducer,
  LoginReducer,
  AdminReducer,
});

const store = createStore(allReducer);

function App() {
  return (
    <Provider store={store}>
      <Router>
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
        <Route path="/Profile" exact component={ProfileContainer} />
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
        <Route path="/Admin" exact component={AdminPanel} />
        <Route
          path="/Admin/edit/:uid"
          exact
          render={(props) => <UserEdit uid={props.match.params.uid} />}
        />
      </Router>
    </Provider>
  );
}

export default App;
