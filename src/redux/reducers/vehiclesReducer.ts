import {
  SET_VEHICLES_DATA,
  SET_CURRENT_VEHICLES_DATA,
  SET_SERCHED_VEHICLES,
  SET_VEHICLES_PAGE,
} from '../actions/types'

const initialState = {
  vehicles: null,
  currentVehicles: null,
}

type ActionType = {
  type: string
  payload: any
}

export const vehiclesReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case SET_VEHICLES_DATA:
      return {
        ...state,
        vehicles: action.payload,
      }

    case SET_CURRENT_VEHICLES_DATA:
      return {
        ...state,
        currentVehicles: action.payload,
      }

    case SET_SERCHED_VEHICLES:
      return {
        ...state,
        vehicles: action.payload,
      }

    case SET_VEHICLES_PAGE:
      return {
        ...state,
        vehicles: action.payload,
      }

    default:
      return state
  }
}
