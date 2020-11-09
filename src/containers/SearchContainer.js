import { connect } from 'react-redux';
import { Search, Home } from '../components';
import { findPlayLists } from '../actions/playListAction';
import Service from '../services/Services';

const stateToPropertyMapper = (state) => ({
  playLists: state.playListReducer.playLists,
});

const propertyToDispatchMapper = (dispatch) => ({
  findPlayLists: (json) =>
    Service.searchForPlaylists(json).then((playLists) => {
      findPlayLists(dispatch, playLists);
    }),
});

export default {
  Search: connect(stateToPropertyMapper, propertyToDispatchMapper)(Search),
  Home: connect(stateToPropertyMapper, propertyToDispatchMapper)(Home),
};
