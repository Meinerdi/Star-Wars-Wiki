import { SET_IS_FETCHING } from '../actions/types'

const initialState = {
  isFetching: false,
}

type ActionType = {
  type: string
  payload: boolean
}

type State = {
  isFetching: boolean
}

export const globalReducer = (
  state: State = initialState,
  action: ActionType
) => {
  switch (action.type) {
    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload,
      }

    default:
      return state
  }
}
