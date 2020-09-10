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
  getAllVehicles() {
    return instance.get('vehicles/')
  },
  getCurrentVehicles(vehicleId: any) {
    return instance.get(`vehicles/${vehicleId}`)
  },
  getSearchedVehicles(searchedText: string) {
    return instance.get(`vehicles/?search=${searchedText}`)
  },
  getVehiclesPage(pageNumber: string) {
    return instance.get(`vehicles/?page=${pageNumber}`)
  },
  getAllStarships() {
    return instance.get('starships/')
  },
  getCurrentStarships(starshipId: any) {
    return instance.get(`starships/${starshipId}`)
  },
  getSearchedStarships(searchedText: string) {
    return instance.get(`starships/?search=${searchedText}`)
  },
  getStarshipsPage(pageNumber: string) {
    return instance.get(`starships/?page=${pageNumber}`)
  },
  getAllPlanets() {
    return instance.get('planets/')
  },
  getCurrentPlanets(planetId: any) {
    return instance.get(`planets/${planetId}`)
  },
  getSearchedPlanets(searchedText: string) {
    return instance.get(`planets/?search=${searchedText}`)
  },
  getPlanetsPage(pageNumber: string) {
    return instance.get(`planets/?page=${pageNumber}`)
  },
  getAllFilms() {
    return instance.get('films/')
  },
  getCurrentFilms(filmId: any) {
    return instance.get(`films/${filmId}`)
  },
  getSearchedFilms(searchedText: string) {
    return instance.get(`films/?search=${searchedText}`)
  },
  getFilmsPage(pageNumber: string) {
    return instance.get(`films/?page=${pageNumber}`)
  },
}
