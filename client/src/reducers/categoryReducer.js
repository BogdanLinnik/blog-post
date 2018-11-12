import { FETCH_CATEGORIES, NEW_CATEGORY, UPDATE_CATEGORY, DELETE_CATEGORY } from '../actions/types'

const initialState = {
  type: '',
  items: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return {
        ...state,
        type: action.type,
        items: action.payload
      }
    case NEW_CATEGORY:
      return {
        ...state,
        type: action.type,
        newItem: action.payload
      }
    case UPDATE_CATEGORY:
      return {
        ...state,
        type: action.type,
        updatedItem: action.payload
      }
    case DELETE_CATEGORY:
      return {
        ...state,
        type: action.type,
        deletedItem: action.payload
      }
    default:
      return state;
  }
}
