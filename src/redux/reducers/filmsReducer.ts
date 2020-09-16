import {
  SET_FILMS_DATA,
  SET_CURRENT_FILMS_DATA,
  SET_SERCHED_FILMS,
  SET_FILMS_PAGE,
} from '../actions/types'

const initialState = {
  films: null,
  currentFilms: null,
}

type ActionType = {
  type: string
  payload: Record<string, unknown>
}

type State = {
  films: null | []
  currentFilms: null | []
}

export const filmsReducer = (
  state: State = initialState,
  action: ActionType
) => {
  switch (action.type) {
    case SET_FILMS_DATA:
      return {
        ...state,
        films: action.payload,
      }

    case SET_CURRENT_FILMS_DATA:
      return {
        ...state,
        currentFilms: action.payload,
      }

    case SET_SERCHED_FILMS:
      return {
        ...state,
        films: action.payload,
      }

    case SET_FILMS_PAGE:
      return {
        ...state,
        films: action.payload,
      }

    default:
      return state
  }
}
