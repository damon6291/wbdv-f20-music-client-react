export const FIND_PROFILE = 'FIND_PROFILE';

export const findProfile = (dispatch, profile) => {
  dispatch({
    type: FIND_PROFILE,
    profile,
  });
};
