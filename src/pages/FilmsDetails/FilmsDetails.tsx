import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import noImage from '../../assets/images/404.png'
import { Preloader } from '../../components/Preloader/Preloader'
import { fetchCurrentFilmsData } from '../../redux/actions/actionsFilms'
import s from './FilmsDetails.module.scss'
import { ThumbnailsHolder } from '../../components/ThumbnailsHolder/ThumbnailsHolder'
import {
  setThumbnailsPeople,
  setThumbnailsHomeworld,
  setThumbnailsStarships,
  setThumbnailsVehicles,
  setThumbnailsSpecies,
  resetThumbnailsStore,
} from '../../redux/actions/actionsThumbnails'
import { createThumbnailResponseDispatcher } from '../../utils/utils'

type Props = {
  match: any
  fetchCurrentFilmsData: (filmId: number) => void
  currentFilms: any
  isFetching: boolean
  thumbnails: any
  setThumbnailsPeople: (payload: any) => void
  setThumbnailsHomeworld: (payload: any) => void
  setThumbnailsStarships: (payload: any) => void
  setThumbnailsVehicles: (payload: any) => void
  setThumbnailsSpecies: (payload: any) => void
  resetThumbnailsStore: (payload?: any) => void
}

const FilmsDetails = ({
  match,
  fetchCurrentFilmsData,
  currentFilms,
  isFetching,
  thumbnails,
  setThumbnailsPeople,
  setThumbnailsHomeworld,
  setThumbnailsStarships,
  setThumbnailsVehicles,
  setThumbnailsSpecies,
  resetThumbnailsStore,
}: Props) => {
  useEffect(() => {
    fetchCurrentFilmsData(match.params.id)

    return () => {
      resetThumbnailsStore()
    }
  }, [])

  useEffect(() => {
    if (currentFilms) {
      createThumbnailResponseDispatcher(
        currentFilms.characters,
        setThumbnailsPeople
      )
      createThumbnailResponseDispatcher(
        currentFilms.planets,
        setThumbnailsHomeworld
      )
      createThumbnailResponseDispatcher(
        currentFilms.starships,
        setThumbnailsStarships
      )
      createThumbnailResponseDispatcher(
        currentFilms.vehicles,
        setThumbnailsVehicles
      )
      createThumbnailResponseDispatcher(
        currentFilms.species,
        setThumbnailsSpecies
      )
    }
  }, [currentFilms])

  const enpointsOfThumbnails = {
    people: currentFilms?.characters,
    homeworld: currentFilms?.planets,
    starships: currentFilms?.starships,
    vehicles: currentFilms?.vehicles,
    species: currentFilms?.species,
  }

  return (
    <div className={s['card-wrapper']}>
      {isFetching && <Preloader />}

      {!isFetching && (
        <>
          <div className={s['card-inner']}>
            <img src={noImage} alt="Avatar" className={s['films-avatar']} />
            <div className={s['films-info']}>
              <table className={s['films-info-list']}>
                <tbody>
                  <tr>
                    <td>Title:</td>
                    <td>
                      {currentFilms?.title} (Episode:{currentFilms?.episode_id})
                    </td>
                  </tr>
                  <tr>
                    <td>Director:</td>
                    <td>{currentFilms?.director}</td>
                  </tr>
                  <tr>
                    <td>Producer:</td>
                    <td>{currentFilms?.producer}</td>
                  </tr>
                  <tr>
                    <td>Release Date:</td>
                    <td>{currentFilms?.release_date}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className={s.description}>
            <p>{currentFilms?.opening_crawl}</p>
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

const mapStateToProps = (state: any) => ({
  currentFilms: state.filmsReducer.currentFilms,
  isFetching: state.globalReducer.isFetching,
  thumbnails: state.thumbnailsReducer,
})

export const FilmsDetailsContainer = connect(mapStateToProps, {
  fetchCurrentFilmsData,
  setThumbnailsPeople,
  setThumbnailsHomeworld,
  setThumbnailsStarships,
  setThumbnailsVehicles,
  setThumbnailsSpecies,
  resetThumbnailsStore,
})(FilmsDetails)
