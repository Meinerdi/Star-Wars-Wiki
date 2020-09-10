import {
  SET_FILMS_DATA,
  SET_CURRENT_FILMS_DATA,
  SET_SERCHED_FILMS,
  SET_FILMS_PAGE,
} from './types'
import { API } from '../../api/api'
import { setIsFetching } from './actionsGlobal'

const setFilmsData = (payload) => ({
  type: SET_FILMS_DATA,
  payload,
})

const setCurrentFilmsData = (payload) => ({
  type: SET_CURRENT_FILMS_DATA,
  payload,
})

const setSearchedFilms = (payload) => ({
  type: SET_SERCHED_FILMS,
  payload,
})

const setFilmsPage = (payload) => ({
  type: SET_FILMS_PAGE,
  payload,
})

export const fetchFilmsData = () => async (dispatch) => {
  dispatch(setIsFetching(true))
  const result = await API.getAllFilms()
  dispatch(setFilmsData(result.data))
  dispatch(setIsFetching(false))
}

export const fetchCurrentFilmsData = (filmId) => async (dispatch) => {
  dispatch(setIsFetching(true))
  const result = await API.getCurrentFilms(filmId)
  dispatch(setCurrentFilmsData(result.data))
  dispatch(setIsFetching(false))
}

export const fetchSearchedFilmsData = (searchedText) => async (dispatch) => {
  dispatch(setIsFetching(true))
  const result = await API.getSearchedFilms(searchedText)
  dispatch(setSearchedFilms(result.data))
  dispatch(setIsFetching(false))
}

export const fetchFilmsPageData = (pageNumber) => async (dispatch) => {
  dispatch(setIsFetching(true))
  const result = await API.getFilmsPage(pageNumber)
  dispatch(setFilmsPage(result.data))
  dispatch(setIsFetching(false))
}
