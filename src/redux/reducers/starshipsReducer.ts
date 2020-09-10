import {
  SET_STARSHIPS_DATA,
  SET_CURRENT_STARSHIPS_DATA,
  SET_SERCHED_STARSHIPS,
  SET_STARSHIPS_PAGE,
} from '../actions/types'

const initialState = {
  starships: null,
  currentStarships: null,
}

type ActionType = {
  type: string
  payload: any
}

export const starshipsReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case SET_STARSHIPS_DATA:
      return {
        ...state,
        starships: action.payload,
      }

    case SET_CURRENT_STARSHIPS_DATA:
      return {
        ...state,
        currentStarships: action.payload,
      }

    case SET_SERCHED_STARSHIPS:
      return {
        ...state,
        starships: action.payload,
      }

    case SET_STARSHIPS_PAGE:
      return {
        ...state,
        starships: action.payload,
      }

    default:
      return state
  }
}
