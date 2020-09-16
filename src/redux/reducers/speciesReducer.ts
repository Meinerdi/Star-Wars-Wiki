import {
  SET_SPECIES_DATA,
  SET_CURRENT_SPECIES_DATA,
  SET_SERCHED_SPECIES,
  SET_SPECIES_PAGE,
} from '../actions/types'

const initialState = {
  species: null,
  currentSpecies: null,
}

type ActionType = {
  type: string
  payload: Record<string, unknown>
}

type State = {
  species: null | []
  currentSpecies: null | []
}

export const speciesReducer = (
  state: State = initialState,
  action: ActionType
) => {
  switch (action.type) {
    case SET_SPECIES_DATA:
      return {
        ...state,
        species: action.payload,
      }

    case SET_CURRENT_SPECIES_DATA:
      return {
        ...state,
        currentSpecies: action.payload,
      }

    case SET_SERCHED_SPECIES:
      return {
        ...state,
        species: action.payload,
      }

    case SET_SPECIES_PAGE:
      return {
        ...state,
        species: action.payload,
      }

    default:
      return state
  }
}
