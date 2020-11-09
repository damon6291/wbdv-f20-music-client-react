export const FIND_DETAILS = 'FIND_DETAILS';

export const findDetails = (dispatch, details) => {
  dispatch({
    type: FIND_DETAILS,
    details,
  });
};
