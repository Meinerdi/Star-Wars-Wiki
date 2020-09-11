import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import noImage from '../../assets/images/404.png'
import { Preloader } from '../../components/Preloader/Preloader'
import { ThumbnailsHolder } from '../../components/ThumbnailsHolder/ThumbnailsHolder'
import { fetchCurrentPeopleData } from '../../redux/actions/actionsPeople'
import {
  setThumbnailsFilms,
  setThumbnailsHomeworld,
  setThumbnailsSpecies,
  setThumbnailsStarships,
  setThumbnailsVehicles,
} from '../../redux/actions/actionsThumbnails'
import { createThumbnailResponseDispatcher } from '../../utils/utils'
import s from './PeopleDetails.module.scss'

const PeopleDetails = ({
  match,
  fetchCurrentPeopleData,
  currentPeople,
  isFetching,
  thumbnails,
  setThumbnailsFilms,
  setThumbnailsHomeworld,
  setThumbnailsStarships,
  setThumbnailsVehicles,
  setThumbnailsSpecies,
}: any) => {
  useEffect(() => {
    fetchCurrentPeopleData(match.params.id)
  }, [])

  useEffect(() => {
    if (currentPeople) {
      createThumbnailResponseDispatcher(currentPeople.films, setThumbnailsFilms)
      createThumbnailResponseDispatcher(
        [currentPeople.homeworld],
        setThumbnailsHomeworld
      )
      createThumbnailResponseDispatcher(
        currentPeople.starships,
        setThumbnailsStarships
      )
      createThumbnailResponseDispatcher(
        currentPeople.vehicles,
        setThumbnailsVehicles
      )
      createThumbnailResponseDispatcher(
        currentPeople.species,
        setThumbnailsSpecies
      )
    }
  }, [currentPeople])

  const enpointsOfThumbnails = {
    films: currentPeople?.films,
    homeworld: [currentPeople?.homeworld],
    starships: currentPeople?.starships,
    vehicles: currentPeople?.vehicles,
    species: currentPeople?.species,
  }

  return (
    <div className={s['card-wrapper']}>
      {isFetching && <Preloader />}

      {!isFetching && (
        <>
          <div className={s['card-inner']}>
            <img
              src={noImage}
              alt="Person Avatar"
              className={s['person-avatar']}
            />
            <div className={s['personal-info']}>
              <table className={s['personal-info-list']}>
                <tbody>
                  <tr>
                    <td>Name:</td>
                    <td>{currentPeople?.name}</td>
                  </tr>
                  <tr>
                    <td>Gender:</td>
                    <td>{currentPeople?.gender}</td>
                  </tr>
                  <tr>
                    <td>Birthday:</td>
                    <td>{currentPeople?.birth_year}</td>
                  </tr>
                  <tr>
                    <td>Eyes Color:</td>
                    <td>{currentPeople?.eye_color}</td>
                  </tr>
                  <tr>
                    <td>Hair Color:</td>
                    <td>{currentPeople?.hair_color}</td>
                  </tr>
                  <tr>
                    <td>Skin Color:</td>
                    <td>{currentPeople?.skin_color}</td>
                  </tr>
                  <tr>
                    <td>Height:</td>
                    <td>{currentPeople?.height} sm</td>
                  </tr>
                  <tr>
                    <td>Mass:</td>
                    <td>{currentPeople?.mass} kg</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <ThumbnailsHolder
            thumbnails={thumbnails}
            rootLocation={match.url}
            enpointsOfThumbnails={enpointsOfThumbnails}
          />
        </>
      )}
    </div>
  )
}

const mapStateToProps = (state: any) => {
  return {
    currentPeople: state.peopleReducer.currentPeople,
    isFetching: state.globalReducer.isFetching,
    thumbnails: state.thumbnailsReducer,
  }
}

export const PeopleDetailsContainer = connect(mapStateToProps, {
  fetchCurrentPeopleData,
  setThumbnailsFilms,
  setThumbnailsHomeworld,
  setThumbnailsStarships,
  setThumbnailsVehicles,
  setThumbnailsSpecies,
})(PeopleDetails)
