import { ADD_PEOPLE_TO_FAVORITES } from '../actions/types'

const initialState = {
  people: [],
}

export const favoritesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_PEOPLE_TO_FAVORITES:
      return {
        ...state,
        people: [...state.people, action.payload],
      }

    default:
      return state
  }
}
