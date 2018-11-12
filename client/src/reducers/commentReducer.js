import { FETCH_COMMENTS, NEW_COMMENT } from '../actions/types'

const initialState = {
  type: '',
  items: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_COMMENTS:
      return {
        ...state,
        type: action.type,
        items: action.payload
      }
    case NEW_COMMENT:
      return {
        ...state,
        type: action.type,
        newItem: action.payload
      }
    default:
      return state;
  }
}
