import {
  SET_STARSHIPS_DATA,
  SET_CURRENT_STARSHIPS_DATA,
  SET_SERCHED_STARSHIPS,
  SET_STARSHIPS_PAGE,
} from './types'
import { API } from '../../api/api'
import { setIsFetching } from './actionsGlobal'

const setStarshipsData = (payload) => ({
  type: SET_STARSHIPS_DATA,
  payload,
})

const setCurrentStarshipsData = (payload) => ({
  type: SET_CURRENT_STARSHIPS_DATA,
  payload,
})

const setSearchedStarships = (payload) => ({
  type: SET_SERCHED_STARSHIPS,
  payload,
})

const setStarshipsPage = (payload) => ({
  type: SET_STARSHIPS_PAGE,
  payload,
})

export const fetchStarshipsData = () => async (dispatch) => {
  dispatch(setIsFetching(true))
  const result = await API.getAllStarships()
  dispatch(setStarshipsData(result.data))
  dispatch(setIsFetching(false))
}

export const fetchCurrentStarshipsData = (userId) => async (dispatch) => {
  dispatch(setIsFetching(true))
  const result = await API.getCurrentStarships(userId)
  dispatch(setCurrentStarshipsData(result.data))
  dispatch(setIsFetching(false))
}

export const fetchSearchedStarshipsData = (searchedText) => async (
  dispatch
) => {
  dispatch(setIsFetching(true))
  const result = await API.getSearchedStarships(searchedText)
  dispatch(setSearchedStarships(result.data))
  dispatch(setIsFetching(false))
}

export const fetchStarshipsPageData = (pageNumber) => async (dispatch) => {
  dispatch(setIsFetching(true))
  const result = await API.getStarshipsPage(pageNumber)
  dispatch(setStarshipsPage(result.data))
  dispatch(setIsFetching(false))
}
