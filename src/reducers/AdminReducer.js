import {
  FIND_ALL_USERS,
  ADMIN_USER,
  CHANGE_ROLE,
  EDIT_USER,
} from "../actions/AdminAction";

const initialState = {
  users: [],
  user: [],
  count: 0,
  role: "",
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
        role: action.user.role,
      };
    case CHANGE_ROLE:
      return {
        ...state,
        role: action.role,
      };
    default:
      return state;
  }
};

export default AdminReducer;
