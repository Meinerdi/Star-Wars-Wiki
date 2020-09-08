import { FETCH_USERS_DATA, FETCH_CURRENT_USER_DATA } from './types'
import { API } from '../../api/api'

const setUsersData = (payload) => ({
  type: FETCH_USERS_DATA,
  payload,
})

const setCurrentUserData = (payload) => ({
  type: FETCH_CURRENT_USER_DATA,
  payload,
})

export const fetchUsersData = () => async (dispatch) => {
  const result = await API.getAllUsers()
  dispatch(setUsersData(result.data))
}

export const fetchCurrentUserData = (userId) => async (dispatch) => {
  const result = await API.getCurrentUser(userId)
  dispatch(setCurrentUserData(result.data))
}
