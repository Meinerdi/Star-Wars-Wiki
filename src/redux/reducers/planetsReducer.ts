import {
  SET_PLANETS_DATA,
  SET_CURRENT_PLANETS_DATA,
  SET_SERCHED_PLANETS,
  SET_PLANETS_PAGE,
} from '../actions/types'

const initialState = {
  planets: null,
  currentPlanets: null,
}

type ActionType = {
  type: string
  payload: Record<string, unknown>
}

type State = {
  planets: null | []
  currentPlanets: null | []
}

export const planetsReducer = (
  state: State = initialState,
  action: ActionType
) => {
  switch (action.type) {
    case SET_PLANETS_DATA:
      return {
        ...state,
        planets: action.payload,
      }

    case SET_CURRENT_PLANETS_DATA:
      return {
        ...state,
        currentPlanets: action.payload,
      }

    case SET_SERCHED_PLANETS:
      return {
        ...state,
        planets: action.payload,
      }

    case SET_PLANETS_PAGE:
      return {
        ...state,
        planets: action.payload,
      }

    default:
      return state
  }
}
