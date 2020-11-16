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
export const removePeopleFromFavorites = (payload) => ({
  type: REMOVE_PEOPLE_FROM_FAVORITES,
  payload,
})
export const removeSpeciesFromFavorites = (payload) => ({
  type: REMOVE_SPECIES_FROM_FAVORITES,
  payload,
})
export const removeVehiclesFromFavorites = (payload) => ({
  type: REMOVE_VEHICLES_FROM_FAVORITES,
  payload,
})
export const removeStarshipsFromFavorites = (payload) => ({
  type: REMOVE_STARSHIPS_FROM_FAVORITES,
  payload,
})
export const removePlanetsFromFavorites = (payload) => ({
  type: REMOVE_PLANETS_FROM_FAVORITES,
  payload,
})
export const removeFilmsFromFavorites = (payload) => ({
  type: REMOVE_FILMS_FROM_FAVORITES,
  payload,
})
export const removeFavoritesFromFavoritesPage = (item, key) => ({
  type: REMOVE_FAVORITES_FROM_FAVORITES_PAGE,
  item,
  key,
})
