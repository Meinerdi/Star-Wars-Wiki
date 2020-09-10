import {
  SET_PLANETS_DATA,
  SET_CURRENT_PLANETS_DATA,
  SET_SERCHED_PLANETS,
  SET_PLANETS_PAGE,
} from './types'
import { API } from '../../api/api'
import { setIsFetching } from './actionsGlobal'

const setPlanetsData = (payload) => ({
  type: SET_PLANETS_DATA,
  payload,
})

const setCurrentPlanetsData = (payload) => ({
  type: SET_CURRENT_PLANETS_DATA,
  payload,
})

const setSearchedPlanets = (payload) => ({
  type: SET_SERCHED_PLANETS,
  payload,
})

const setPlanetsPage = (payload) => ({
  type: SET_PLANETS_PAGE,
  payload,
})

export const fetchPlanetsData = () => async (dispatch) => {
  dispatch(setIsFetching(true))
  const result = await API.getAllPlanets()
  dispatch(setPlanetsData(result.data))
  dispatch(setIsFetching(false))
}

export const fetchCurrentPlanetsData = (planetId) => async (dispatch) => {
  dispatch(setIsFetching(true))
  const result = await API.getCurrentPlanets(planetId)
  dispatch(setCurrentPlanetsData(result.data))
  dispatch(setIsFetching(false))
}

export const fetchSearchedPlanetsData = (searchedText) => async (dispatch) => {
  dispatch(setIsFetching(true))
  const result = await API.getSearchedPlanets(searchedText)
  dispatch(setSearchedPlanets(result.data))
  dispatch(setIsFetching(false))
}

export const fetchPlanetsPageData = (pageNumber) => async (dispatch) => {
  dispatch(setIsFetching(true))
  const result = await API.getPlanetsPage(pageNumber)
  dispatch(setPlanetsPage(result.data))
  dispatch(setIsFetching(false))
}
