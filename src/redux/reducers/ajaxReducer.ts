import {
  FETCH_USERS_DATA,
  FETCH_CURRENT_USER_DATA,
  SET_IS_FETCHING,
} from '../actions/types'

const initialState = {
  people: null,
  currentPeople: null,
  isFetching: false,
}

type ActionType = {
  type: string
  payload: any
}

const ajaxReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case FETCH_USERS_DATA:
      return {
        ...state,
        people: action.payload,
      }

    case FETCH_CURRENT_USER_DATA:
      return {
        ...state,
        currentPeople: action.payload,
      }

    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload,
      }

    default:
      return state
  }
}

export default ajaxReducer
