import {
  SET_THUMBNAILS_FILMS,
  SET_THUMBNAILS_HOMEWORLD,
  SET_THUMBNAILS_STARSHIPS,
  SET_THUMBNAILS_VEHICLES,
  SET_THUMBNAILS_SPECIES,
  SET_THUMBNAILS_PEOPLE,
  RESET_THUMBNAILS_STORE,
} from '../actions/types'

const initialState = {
  films: null,
  homeworld: null,
  starships: null,
  vehicles: null,
  species: null,
  people: null,
}

type ActionType = {
  type: string
  payload: any
}

type State = {
  films: null | []
  homeworld: null | []
  starships: null | []
  vehicles: null | []
  species: null | []
  people: null | []
}

export const thumbnailsReducer = (
  state: State = initialState,
  action: ActionType
) => {
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

    case SET_THUMBNAILS_PEOPLE:
      return {
        ...state,
        people: [...action.payload],
      }

    case RESET_THUMBNAILS_STORE:
      return {
        ...state,
        films: null,
        homeworld: null,
        starships: null,
        vehicles: null,
        species: null,
        people: null,
      }

    default:
      return state
  }
}
