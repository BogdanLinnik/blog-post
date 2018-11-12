import { FETCH_CATEGORIES, NEW_CATEGORY, UPDATE_CATEGORY, DELETE_CATEGORY } from '../actions/types'

const initialState = {
  items: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return {
        ...state,
        items: action.payload
      }
    case NEW_CATEGORY:
      return {
        ...state,
        newItem: action.payload
      }
    case UPDATE_CATEGORY:
      return {
        ...state,
        updatedItem: action.payload
      }
    case DELETE_CATEGORY:
      return {
        ...state,
        deletedItem: action.payload
      }
    default:
      return state;
  }
}
