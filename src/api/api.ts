import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://swapi.dev/api/',
})

export const API = {
  getAllUsers() {
    return instance.get('people/')
  },
  getCurrentUser(userId: any) {
    return instance.get(`people/${userId}`)
  },
}
