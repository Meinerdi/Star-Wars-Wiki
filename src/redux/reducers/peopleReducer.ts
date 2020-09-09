import {
  SET_PEOPLE_DATA,
  SET_CURRENT_PEOPLE_DATA,
  SET_SERCHED_PEOPLE,
  SET_PEOPLE_PAGE,
} from '../actions/types'

const initialState = {
  people: null,
  currentPeople: null,
}

type ActionType = {
  type: string
  payload: any
}

export const peopleReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case SET_PEOPLE_DATA:
      return {
        ...state,
        people: action.payload,
      }

    case SET_CURRENT_PEOPLE_DATA:
      return {
        ...state,
        currentPeople: action.payload,
      }

    case SET_SERCHED_PEOPLE:
      return {
        ...state,
        people: action.payload,
      }

    case SET_PEOPLE_PAGE:
      return {
        ...state,
        people: action.payload,
      }

    default:
      return state
  }
}
