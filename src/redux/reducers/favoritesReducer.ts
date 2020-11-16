import {
  ADD_PEOPLE_TO_FAVORITES,
  ADD_SPECIES_TO_FAVORITES,
  ADD_VEHICLES_TO_FAVORITES,
  ADD_STARSHIPS_TO_FAVORITES,
  ADD_PLANETS_TO_FAVORITES,
  ADD_FILMS_TO_FAVORITES,
  SET_FAVORITES_FROM_LOCALSTORAGE,
  REMOVE_PEOPLE_FROM_FAVORITES,
  REMOVE_SPECIES_FROM_FAVORITES,
  REMOVE_VEHICLES_FROM_FAVORITES,
  REMOVE_STARSHIPS_FROM_FAVORITES,
  REMOVE_PLANETS_FROM_FAVORITES,
  REMOVE_FILMS_FROM_FAVORITES,
  REMOVE_FAVORITES_FROM_FAVORITES_PAGE,
} from '../actions/types'

const initialState = {
  people: [],
  species: [],
  vehicles: [],
  starships: [],
  planets: [],
  films: [],
}

type Action = Record<string, any> & { key: keyof State }

type State = {
  people: []
  species: []
  vehicles: []
  starships: []
  planets: []
  films: []
}

export const favoritesReducer = (state = initialState, action: Action) => {
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

    case REMOVE_PEOPLE_FROM_FAVORITES:
      return {
        ...state,
        people: state.people.filter(
          (i: Record<string, unknown>) => i.name !== action.payload.name
        ),
      }
    case REMOVE_SPECIES_FROM_FAVORITES:
      return {
        ...state,
        species: state.species.filter(
          (i: Record<string, unknown>) => i.name !== action.payload.name
        ),
      }
    case REMOVE_VEHICLES_FROM_FAVORITES:
      return {
        ...state,
        vehicles: state.vehicles.filter(
          (i: Record<string, unknown>) => i.name !== action.payload.name
        ),
      }
    case REMOVE_STARSHIPS_FROM_FAVORITES:
      return {
        ...state,
        starships: state.starships.filter(
          (i: Record<string, unknown>) => i.name !== action.payload.name
        ),
      }
    case REMOVE_PLANETS_FROM_FAVORITES:
      return {
        ...state,
        planets: state.planets.filter(
          (i: Record<string, unknown>) => i.name !== action.payload.name
        ),
      }
    case REMOVE_FILMS_FROM_FAVORITES:
      return {
        ...state,
        films: state.films.filter(
          (i: Record<string, unknown>) => i.title !== action.payload.title
        ),
      }

    case REMOVE_FAVORITES_FROM_FAVORITES_PAGE:
      return {
        ...state,
        [action.key]: state[action.key].filter((i: Record<string, unknown>) => {
          if (action.key === 'films') {
            return i.title !== action.item.title
          }
          return i.name !== action.item.name
        }),
      }

    default:
      return state
  }
}
