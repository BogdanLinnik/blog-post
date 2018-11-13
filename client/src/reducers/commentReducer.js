import { FETCH_COMMENTS } from '../actions/types'

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
    default:
      return state;
  }
}
