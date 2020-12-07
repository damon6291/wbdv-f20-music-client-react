export const FIND_ALL_USERS = 'FIND_ALL_USERS';
export const ADMIN_USER = 'ADMIN_USER';

export const adminFindAllUsers = (dispatch, users) => {
  dispatch({
    type: FIND_ALL_USERS,
    users,
  });
};

export const adminFindUser = (dispatch, user) => {
  dispatch({
    type: ADMIN_USER,
    user,
  });
};
