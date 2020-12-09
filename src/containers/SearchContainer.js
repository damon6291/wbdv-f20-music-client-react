import { connect } from 'react-redux';
import Search from '../components/Search/Search';
import { findPlayLists, findUsers } from '../actions/playListAction';
import Service from '../services/Services';

const stateToPropertyMapper = (state) => ({
  playLists: state.playListReducer.playLists,
  users: state.playListReducer.users,
  userId: state.LoginReducer.userId,
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
  recordSearch: (id, query) =>
    Service.recordSearch(id, query).then((result) => console.log(result)),
});

export default connect(stateToPropertyMapper, propertyToDispatchMapper)(Search);
