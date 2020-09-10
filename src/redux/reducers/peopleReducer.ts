import {
  SET_PEOPLE_DATA,
  SET_CURRENT_PEOPLE_DATA,
  SET_SERCHED_PEOPLE,
  SET_PEOPLE_PAGE,
  SET_THUMBNAILS_FILMS,
} from '../actions/types'

const initialState = {
  people: null,
  currentPeople: null,
  thumbnailsPeople: {
    films: null,
  },
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

    case SET_THUMBNAILS_FILMS:
      return {
        ...state,
        thumbnailsPeople: {
          ...state.thumbnailsPeople,
          films: [...action.payload],
        },
      }

    default:
      return state
  }
}
