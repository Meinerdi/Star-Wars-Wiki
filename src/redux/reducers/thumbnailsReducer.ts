import {
  SET_THUMBNAILS_FILMS,
  SET_THUMBNAILS_HOMEWORLD,
  SET_THUMBNAILS_STARSHIPS,
  SET_THUMBNAILS_VEHICLES,
  SET_THUMBNAILS_SPECIES,
} from '../actions/types'

const initialState = {
  films: null,
  homeworld: null,
  starships: null,
  vehicles: null,
  species: null,
}

type ActionType = {
  type: string
  payload: any
}

export const thumbnailsReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case SET_THUMBNAILS_FILMS:
      return {
        ...state,
        films: [...action.payload],
      }
    case SET_THUMBNAILS_HOMEWORLD:
      return {
        ...state,
        homeworld: [...action.payload],
      }
    case SET_THUMBNAILS_STARSHIPS:
      return {
        ...state,
        starships: [...action.payload],
      }
    case SET_THUMBNAILS_VEHICLES:
      return {
        ...state,
        vehicles: [...action.payload],
      }
    case SET_THUMBNAILS_SPECIES:
      return {
        ...state,
        species: [...action.payload],
      }

    default:
      return state
  }
}
