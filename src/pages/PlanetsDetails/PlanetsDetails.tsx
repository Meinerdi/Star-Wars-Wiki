import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import noImage from '../../assets/images/404.png'
import { Preloader } from '../../components/Preloader/Preloader'
import { fetchCurrentPlanetsData } from '../../redux/actions/actionsPlanets'
import s from './PlanetsDetails.module.scss'
import { ThumbnailsHolder } from '../../components/ThumbnailsHolder/ThumbnailsHolder'
import {
  setThumbnailsFilms,
  setThumbnailsPeople,
  resetThumbnailsStore,
} from '../../redux/actions/actionsThumbnails'
import { createThumbnailResponseDispatcher } from '../../utils/utils'

type Props = {
  match: any
  fetchCurrentPlanetsData: (planetId: number) => void
  currentPlanets: any
  isFetching: boolean
  thumbnails: any
  setThumbnailsFilms: (payload: any) => void
  setThumbnailsPeople: (payload: any) => void
  resetThumbnailsStore: (payload?: any) => void
}

const PlanetsDetails: React.FC<Props> = ({
  match,
  fetchCurrentPlanetsData,
  currentPlanets,
  isFetching,
  thumbnails,
  setThumbnailsFilms,
  setThumbnailsPeople,
  resetThumbnailsStore,
}) => {
  useEffect(() => {
    fetchCurrentPlanetsData(match.params.id)

    return () => {
      resetThumbnailsStore()
    }
  }, [])

  useEffect(() => {
    if (currentPlanets) {
      createThumbnailResponseDispatcher(
        currentPlanets.films,
        setThumbnailsFilms
      )
      createThumbnailResponseDispatcher(
        currentPlanets.residents,
        setThumbnailsPeople
      )
    }
  }, [currentPlanets])

  const enpointsOfThumbnails = {
    films: currentPlanets?.films,
    people: currentPlanets?.residents,
  }

  return (
    <div className={s['card-wrapper']}>
      {isFetching && <Preloader />}

      {!isFetching && (
        <>
          <div className={s['card-inner']}>
            <img src={noImage} alt="Avatar" className={s['planets-avatar']} />
            <div className={s['planets-info']}>
              <table className={s['planets-info-list']}>
                <tbody>
                  <tr>
                    <td>Name:</td>
                    <td>{currentPlanets?.name}</td>
                  </tr>
                  <tr>
                    <td>Rotation Period:</td>
                    <td>{currentPlanets?.rotation_period}</td>
                  </tr>
                  <tr>
                    <td>Orbital Period:</td>
                    <td>{currentPlanets?.orbital_period}</td>
                  </tr>
                  <tr>
                    <td>Diameter:</td>
                    <td>{currentPlanets?.diameter}</td>
                  </tr>
                  <tr>
                    <td>Climate:</td>
                    <td>{currentPlanets?.climate}</td>
                  </tr>
                  <tr>
                    <td>Gravity:</td>
                    <td>{currentPlanets?.gravity}</td>
                  </tr>
                  <tr>
                    <td>Terrain:</td>
                    <td>{currentPlanets?.terrain}</td>
                  </tr>
                  <tr>
                    <td>Surface Water:</td>
                    <td>{currentPlanets?.surface_water}</td>
                  </tr>
                  <tr>
                    <td>Population:</td>
                    <td>{currentPlanets?.population}</td>
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

const mapStateToProps = (state: any) => ({
  currentPlanets: state.planetsReducer.currentPlanets,
  isFetching: state.globalReducer.isFetching,
  thumbnails: state.thumbnailsReducer,
})

export const PlanetsDetailsContainer = connect(mapStateToProps, {
  fetchCurrentPlanetsData,
  setThumbnailsFilms,
  setThumbnailsPeople,
  resetThumbnailsStore,
})(PlanetsDetails)
