import { API } from '../../api/api'
import { setIsFetching } from './actionsGlobal'
import {
  SET_CURRENT_SPECIES_DATA,
  SET_SERCHED_SPECIES,
  SET_SPECIES_DATA,
  SET_SPECIES_PAGE,
} from './types'

const setSpeciesData = (payload) => ({
  type: SET_SPECIES_DATA,
  payload,
})

const setCurrentSpeciesData = (payload) => ({
  type: SET_CURRENT_SPECIES_DATA,
  payload,
})

const setSearchedSpecies = (payload) => ({
  type: SET_SERCHED_SPECIES,
  payload,
})

const setSpeciesPage = (payload) => ({
  type: SET_SPECIES_PAGE,
  payload,
})

export const fetchSpeciesData = () => async (dispatch) => {
  dispatch(setIsFetching(true))
  const result = await API.getAllSpecies()
  dispatch(setSpeciesData(result.data))
  dispatch(setIsFetching(false))
}

export const fetchCurrentSpeciesData = (speciesId) => async (dispatch) => {
  dispatch(setIsFetching(true))
  const result = await API.getCurrentSpecies(speciesId)
  dispatch(setCurrentSpeciesData(result.data))
  dispatch(setIsFetching(false))
}

export const fetchSearchedSpeciesData = (searchedText) => async (dispatch) => {
  dispatch(setIsFetching(true))
  const result = await API.getSearchedSpecies(searchedText)
  dispatch(setSearchedSpecies(result.data))
  dispatch(setIsFetching(false))
}

export const fetchSpeciesPageData = (pageNumber) => async (dispatch) => {
  dispatch(setIsFetching(true))
  const result = await API.getSpeciesPage(pageNumber)
  dispatch(setSpeciesPage(result.data))
  dispatch(setIsFetching(false))
}
