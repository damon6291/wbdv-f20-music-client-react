import { connect } from 'react-redux';
import Search from '../components/Search/Search';
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

export default connect(stateToPropertyMapper, propertyToDispatchMapper)(Search);
