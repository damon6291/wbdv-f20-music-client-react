export const FIND_DETAILS = 'FIND_DETAILS';
export const FIND_POSTS_FOR_DETAILS = 'FIND_POSTS_FOR_DETAILS';

export const findDetails = (dispatch, details) => {
  dispatch({
    type: FIND_DETAILS,
    details,
  });
};

export const findPostsForDetails = (dispatch, posts) => {
  dispatch({
    type: FIND_POSTS_FOR_DETAILS,
    posts,
  });
};
