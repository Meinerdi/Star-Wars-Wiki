import {
  SET_VEHICLES_DATA,
  SET_CURRENT_VEHICLES_DATA,
  SET_SERCHED_VEHICLES,
  SET_VEHICLES_PAGE,
} from './types'
import { API } from '../../api/api'
import { setIsFetching } from './actionsGlobal'

const setVehiclesData = (payload) => ({
  type: SET_VEHICLES_DATA,
  payload,
})

const setCurrentVehiclesData = (payload) => ({
  type: SET_CURRENT_VEHICLES_DATA,
  payload,
})

const setSearchedVehicles = (payload) => ({
  type: SET_SERCHED_VEHICLES,
  payload,
})

const setVehiclesPage = (payload) => ({
  type: SET_VEHICLES_PAGE,
  payload,
})

export const fetchVehiclesData = () => async (dispatch) => {
  dispatch(setIsFetching(true))
  const result = await API.getAllVehicles()
  dispatch(setVehiclesData(result.data))
  dispatch(setIsFetching(false))
}

export const fetchCurrentVehiclesData = (id) => async (dispatch) => {
  dispatch(setIsFetching(true))
  const result = await API.getCurrentVehicles(id)
  dispatch(setCurrentVehiclesData(result.data))
  dispatch(setIsFetching(false))
}

export const fetchSearchedVehiclesData = (searchedText) => async (dispatch) => {
  dispatch(setIsFetching(true))
  const result = await API.getSearchedVehicles(searchedText)
  dispatch(setSearchedVehicles(result.data))
  dispatch(setIsFetching(false))
}

export const fetchVehiclesPageData = (pageNumber) => async (dispatch) => {
  dispatch(setIsFetching(true))
  const result = await API.getVehiclesPage(pageNumber)
  dispatch(setVehiclesPage(result.data))
  dispatch(setIsFetching(false))
}
