import { ADD_PEOPLE_TO_FAVORITES } from './types'

export const addPeopleToFavorites = (payload) => {
  return {
    type: ADD_PEOPLE_TO_FAVORITES,
    payload,
  }
}
