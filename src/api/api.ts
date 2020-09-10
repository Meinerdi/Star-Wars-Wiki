import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://swapi.dev/api/',
})

export const API = {
  getAllPeople() {
    return instance.get('people/')
  },
  getCurrentPeople(peopleId: any) {
    return instance.get(`people/${peopleId}`)
  },
  getSearchedPeople(searchedText: string) {
    return instance.get(`people/?search=${searchedText}`)
  },
  getPeoplePage(pageNumber: string) {
    return instance.get(`people/?page=${pageNumber}`)
  },
  getAllSpecies() {
    return instance.get('species/')
  },
  getCurrentSpecies(speciesId: any) {
    return instance.get(`species/${speciesId}`)
  },
  getSearchedSpecies(searchedText: string) {
    return instance.get(`species/?search=${searchedText}`)
  },
  getSpeciesPage(pageNumber: string) {
    return instance.get(`species/?page=${pageNumber}`)
  },
}
