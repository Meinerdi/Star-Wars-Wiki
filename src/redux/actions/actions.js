import {
  FETCH_USERS_DATA,
  FETCH_CURRENT_USER_DATA,
  SET_IS_FETCHING,
} from './types'
import { API } from '../../api/api'

const setUsersData = (payload) => ({
  type: FETCH_USERS_DATA,
  payload,
})

const setCurrentUserData = (payload) => ({
  type: FETCH_CURRENT_USER_DATA,
  payload,
})

const setIsFetching = (payload) => ({
  type: SET_IS_FETCHING,
  payload,
})

export const fetchUsersData = () => async (dispatch) => {
  dispatch(setIsFetching(true))
  const result = await API.getAllUsers()
  dispatch(setUsersData(result.data))
  dispatch(setIsFetching(false))
}

export const fetchCurrentUserData = (userId) => async (dispatch) => {
  dispatch(setIsFetching(true))
  const result = await API.getCurrentUser(userId)
  dispatch(setCurrentUserData(result.data))
  dispatch(setIsFetching(false))
}
