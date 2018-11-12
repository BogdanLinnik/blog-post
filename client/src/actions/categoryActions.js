import axiosClient from '../axiosClient';
import { FETCH_CATEGORIES, NEW_CATEGORY, UPDATE_CATEGORY, DELETE_CATEGORY } from './types'

export const fetchCategories = () => dispatch => {
  axiosClient.get('categories.json').then((response) => {
    dispatch({
      type: FETCH_CATEGORIES,
      payload: response.data.categories
    })
  });
}

export const createCategory = (categoryData) => dispatch => {
  axiosClient.post(`categories.json`, categoryData)
             .then((response) => {
    dispatch({
      type: NEW_CATEGORY,
      payload: response.data.category
    })
  });
}

export const updateCategory = (categoryData) => dispatch => {
  axiosClient.patch(`categories/${categoryData.id}.json`, {category: categoryData})
             .then((response) => {
    dispatch({
      type: UPDATE_CATEGORY,
      payload: response.data.category
    })
  });
}

export const deleteCategory = (categoryData) => dispatch => {
  axiosClient.delete(`categories/${categoryData.id}.json`)
             .then((response) => {
    dispatch({
      type: DELETE_CATEGORY,
      payload: categoryData
    })
  })
}
