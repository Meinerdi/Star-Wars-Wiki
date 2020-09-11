import {
  SET_THUMBNAILS_FILMS,
  SET_THUMBNAILS_HOMEWORLD,
  SET_THUMBNAILS_STARSHIPS,
  SET_THUMBNAILS_VEHICLES,
  SET_THUMBNAILS_SPECIES,
  SET_THUMBNAILS_PEOPLE,
  RESET_THUMBNAILS_STORE,
} from './types'

export const setThumbnailsFilms = (payload: any) => ({
  type: SET_THUMBNAILS_FILMS,
  payload,
})
export const setThumbnailsHomeworld = (payload: any) => ({
  type: SET_THUMBNAILS_HOMEWORLD,
  payload,
})
export const setThumbnailsStarships = (payload: any) => ({
  type: SET_THUMBNAILS_STARSHIPS,
  payload,
})
export const setThumbnailsVehicles = (payload: any) => ({
  type: SET_THUMBNAILS_VEHICLES,
  payload,
})
export const setThumbnailsSpecies = (payload: any) => ({
  type: SET_THUMBNAILS_SPECIES,
  payload,
})
export const setThumbnailsPeople = (payload: any) => ({
  type: SET_THUMBNAILS_PEOPLE,
  payload,
})
export const resetThumbnailsStore = (payload: any) => ({
  type: RESET_THUMBNAILS_STORE,
  payload,
})
