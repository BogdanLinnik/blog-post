import axiosClient from '../axiosClient';
import { FETCH_POSTS, FETCH_POST, NEW_POST, UPDATE_POST, DELETE_POST } from '../actions/types'

export const fetchPosts = (categoryId) => dispatch => {
  axiosClient.get(`categories/${categoryId}.json`).then((response) => {
    dispatch({
      type: FETCH_POSTS,
      category: response.data.category,
      posts: response.data.posts
    })
  });
}

export const fetchPost = (postId) => dispatch => {
  axiosClient.get(`posts/${postId}.json`).then((response) => {
    dispatch({
      type: FETCH_POST,
      post: response.data.post
    })
  });
}

export const createPost = (postData, config) => dispatch => {
  axiosClient.post(`posts.json`, postData, config)
             .then((response) => {
    dispatch({
      type: NEW_POST,
      payload: response.data.post
    })
  });
}

export const updatePost = (postId, postData, config) => dispatch => {
  axiosClient.patch(`posts/${postId}.json`, postData, config)
             .then((response) => {
    dispatch({
      type: UPDATE_POST,
      payload: response.data.post
    })
  });
}

export const deletePost = (postData) => dispatch => {
  axiosClient.delete(`posts/${postData.id}.json`)
             .then((response) => {
    dispatch({
      type: DELETE_POST,
      payload: postData
    })
  })
}
