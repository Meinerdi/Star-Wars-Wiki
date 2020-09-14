import {
  ADD_PEOPLE_TO_FAVORITES,
  ADD_SPECIES_TO_FAVORITES,
  ADD_VEHICLES_TO_FAVORITES,
  ADD_STARSHIPS_TO_FAVORITES,
  ADD_PLANETS_TO_FAVORITES,
  ADD_FILMS_TO_FAVORITES,
  SET_FAVORITES_FROM_LOCALSTORAGE,
} from '../actions/types'

const initialState = {
  people: [],
  species: [],
  vehicles: [],
  starships: [],
  planets: [],
  films: [],
}

export const favoritesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_PEOPLE_TO_FAVORITES:
      return {
        ...state,
        people: [...state.people, action.payload],
      }
    case ADD_SPECIES_TO_FAVORITES:
      return {
        ...state,
        species: [...state.species, action.payload],
      }
    case ADD_VEHICLES_TO_FAVORITES:
      return {
        ...state,
        vehicles: [...state.vehicles, action.payload],
      }
    case ADD_STARSHIPS_TO_FAVORITES:
      return {
        ...state,
        starships: [...state.starships, action.payload],
      }
    case ADD_PLANETS_TO_FAVORITES:
      return {
        ...state,
        planets: [...state.planets, action.payload],
      }
    case ADD_FILMS_TO_FAVORITES:
      return {
        ...state,
        films: [...state.films, action.payload],
      }
    case SET_FAVORITES_FROM_LOCALSTORAGE:
      return {
        ...state,
        ...action.payload,
      }

    default:
      return state
  }
}
