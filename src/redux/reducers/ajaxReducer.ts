import { FETCH_USERS_DATA, FETCH_CURRENT_USER_DATA } from '../actions/types'

const initialState = {
  people: null,
  currentPeople: null,
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

    default:
      return state
  }
}

export default ajaxReducer
