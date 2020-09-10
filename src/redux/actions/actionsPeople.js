import {
  SET_PEOPLE_DATA,
  SET_CURRENT_PEOPLE_DATA,
  SET_SERCHED_PEOPLE,
  SET_PEOPLE_PAGE,
  SET_THUMBNAILS_FILMS,
} from './types'
import { API } from '../../api/api'
import { setIsFetching } from './actionsGlobal'

const setPeopleData = (payload) => ({
  type: SET_PEOPLE_DATA,
  payload,
})

const setCurrentPeopleData = (payload) => ({
  type: SET_CURRENT_PEOPLE_DATA,
  payload,
})

const setSearchedPeople = (payload) => ({
  type: SET_SERCHED_PEOPLE,
  payload,
})

const setPeoplePage = (payload) => ({
  type: SET_PEOPLE_PAGE,
  payload,
})

export const setThumbnailsFilms = (payload) => ({
  type: SET_THUMBNAILS_FILMS,
  payload,
})

export const fetchPeopleData = () => async (dispatch) => {
  dispatch(setIsFetching(true))
  const result = await API.getAllPeople()
  dispatch(setPeopleData(result.data))
  dispatch(setIsFetching(false))
}

export const fetchCurrentPeopleData = (userId) => async (dispatch) => {
  dispatch(setIsFetching(true))
  const result = await API.getCurrentPeople(userId)
  dispatch(setCurrentPeopleData(result.data))
  dispatch(setIsFetching(false))
}

export const fetchSearchedPeopleData = (searchedText) => async (dispatch) => {
  dispatch(setIsFetching(true))
  const result = await API.getSearchedPeople(searchedText)
  dispatch(setSearchedPeople(result.data))
  dispatch(setIsFetching(false))
}

export const fetchPeoplePageData = (pageNumber) => async (dispatch) => {
  dispatch(setIsFetching(true))
  const result = await API.getPeoplePage(pageNumber)
  dispatch(setPeoplePage(result.data))
  dispatch(setIsFetching(false))
}
