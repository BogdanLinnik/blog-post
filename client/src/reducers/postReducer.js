import { FETCH_POSTS, FETCH_POST, NEW_POST, UPDATE_POST, DELETE_POST } from '../actions/types'

const initialState = {
  type: '',
  category: {},
  items: [],
  item: {}
}

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        type: action.type,
        category: action.category,
        items: action.posts
      }
    case FETCH_POST:
      return {
        ...state,
        item: action.post
      }
    case NEW_POST:
      return {
        ...state,
        type: action.type,
        newItem: action.payload
      }
    case UPDATE_POST:
      return {
        ...state,
        type: action.type,
        updatedItem: action.payload
      }
    case DELETE_POST:
      return {
        ...state,
        type: action.type,
        deletedItem: action.payload
      }
    default:
      return state;
  }
}
