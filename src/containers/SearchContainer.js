import { connect } from 'react-redux';
import { Search, Home } from '../components';
import { findPlayLists } from '../actions/playListAction';
import Service from '../services/Services';

const stateToPropertyMapper = (state) => ({
  playLists: state.playListReducer.playLists,
  loggedIn: true, // dummy value, dynamically update with account system
});

const propertyToDispatchMapper = (dispatch) => ({
  findPlayLists: (json) =>
    Service.searchForPlaylists(json).then((playLists) => {
      console.log(playLists);
      findPlayLists(dispatch, playLists.playlists.items);
    }),
});

export default {
  Search: connect(stateToPropertyMapper, propertyToDispatchMapper)(Search),
  Home: connect(stateToPropertyMapper, propertyToDispatchMapper)(Home),
};
