import { connect } from 'react-redux';
import Search from '../components/Search/Search';
import { findPlayLists, findUsers } from '../actions/playListAction';
import Service from '../services/Services';

const stateToPropertyMapper = (state) => ({
  playLists: state.playListReducer.playLists,
  users: state.playListReducer.users,
});

const propertyToDispatchMapper = (dispatch) => ({
  findPlayLists: (json) =>
    Service.searchForPlaylists(json).then((playLists) => {
      console.log(playLists);
      findPlayLists(dispatch, playLists);
    }),
  findUsers: (query) =>
    Service.findUsers(query).then((users) => {
      findUsers(dispatch, users);
    }),
});

export default connect(stateToPropertyMapper, propertyToDispatchMapper)(Search);
