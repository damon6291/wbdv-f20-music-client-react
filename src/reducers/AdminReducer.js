import { FIND_ALL_USERS, ADMIN_USER } from '../actions/AdminAction';

const initialState = {
  users: [],
  user: [],
  count: 0,
};

const AdminReducer = (state = initialState, action) => {
  switch (action.type) {
    case FIND_ALL_USERS:
      let c = 0;
      action.users.map((user, id) => (c += 1));
      return {
        ...state,
        users: action.users,
        count: c,
      };
    case ADMIN_USER:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default AdminReducer;
