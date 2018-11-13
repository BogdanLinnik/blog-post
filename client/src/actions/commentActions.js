import axiosClient from '../axiosClient';
import { FETCH_COMMENTS } from '../actions/types'

export const fetchComments = (commentData) => dispatch => {
  axiosClient.post('comments/list.json', { comment: commentData })
             .then((response) => {
    dispatch({
      type: FETCH_COMMENTS,
      payload: response.data.comments
    })
  });
}

export const createComment = (commentData) => dispatch => {
  axiosClient.post(`comments.json`, { comment: commentData })
}
