import {
  ADD_PEOPLE_TO_FAVORITES,
  ADD_SPECIES_TO_FAVORITES,
  ADD_VEHICLES_TO_FAVORITES,
  ADD_STARSHIPS_TO_FAVORITES,
  ADD_PLANETS_TO_FAVORITES,
  ADD_FILMS_TO_FAVORITES,
  SET_FAVORITES_FROM_LOCALSTORAGE,
} from './types'

export const addPeopleToFavorites = (payload) => ({
  type: ADD_PEOPLE_TO_FAVORITES,
  payload,
})
export const addSpeciesToFavorites = (payload) => ({
  type: ADD_SPECIES_TO_FAVORITES,
  payload,
})
export const addVehiclesToFavorites = (payload) => ({
  type: ADD_VEHICLES_TO_FAVORITES,
  payload,
})
export const addStarshipsToFavorites = (payload) => ({
  type: ADD_STARSHIPS_TO_FAVORITES,
  payload,
})
export const addPlanetsToFavorites = (payload) => ({
  type: ADD_PLANETS_TO_FAVORITES,
  payload,
})
export const addFilmsToFavorites = (payload) => ({
  type: ADD_FILMS_TO_FAVORITES,
  payload,
})
export const setFavoritesFromLocalStorage = (payload) => ({
  type: SET_FAVORITES_FROM_LOCALSTORAGE,
  payload,
})
