import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import noImage from '../../assets/images/404.png'
import { Preloader } from '../../components/Preloader/Preloader'
import { fetchCurrentVehiclesData } from '../../redux/actions/actionsVehicles'
import { ThumbnailsHolder } from '../../components/ThumbnailsHolder/ThumbnailsHolder'
import {
  setThumbnailsFilms,
  setThumbnailsPeople,
  resetThumbnailsStore,
} from '../../redux/actions/actionsThumbnails'
import { createThumbnailResponseDispatcher } from '../../utils/utils'
import s from './VehiclesDetails.module.scss'

const VehiclesDetails = ({
  match,
  fetchCurrentVehiclesData,
  currentVehicles,
  isFetching,
  setThumbnailsFilms,
  setThumbnailsPeople,
  resetThumbnailsStore,
  thumbnails,
}: any) => {
  useEffect(() => {
    fetchCurrentVehiclesData(match.params.id)

    return () => {
      resetThumbnailsStore()
    }
  }, [])

  useEffect(() => {
    if (currentVehicles) {
      createThumbnailResponseDispatcher(
        currentVehicles.films,
        setThumbnailsFilms
      )
      createThumbnailResponseDispatcher(
        currentVehicles.pilots,
        setThumbnailsPeople
      )
    }
  }, [currentVehicles])

  const enpointsOfThumbnails = {
    films: currentVehicles?.films,
    people: currentVehicles?.pilots,
  }

  return (
    <div className={s['card-wrapper']}>
      {isFetching && <Preloader />}

      {!isFetching && (
        <>
          <div className={s['card-inner']}>
            <img src={noImage} alt="Avatar" className={s['vehicles-avatar']} />
            <div className={s['vehicles-info']}>
              <table className={s['vehicles-info-list']}>
                <tbody>
                  <tr>
                    <td>Name:</td>
                    <td>{currentVehicles?.name}</td>
                  </tr>
                  <tr>
                    <td>Model:</td>
                    <td>{currentVehicles?.model}</td>
                  </tr>
                  <tr>
                    <td>Class:</td>
                    <td>{currentVehicles?.vehicle_class}</td>
                  </tr>
                  <tr>
                    <td>Manufacturer:</td>
                    <td>{currentVehicles?.manufacturer}</td>
                  </tr>
                  <tr>
                    <td>Cost:</td>
                    <td>{currentVehicles?.cost_in_credits}</td>
                  </tr>
                  <tr>
                    <td>Length:</td>
                    <td>{currentVehicles?.length}</td>
                  </tr>
                  <tr>
                    <td>Max Speed:</td>
                    <td>{currentVehicles?.max_atmosphering_speed}</td>
                  </tr>
                  <tr>
                    <td>Crew:</td>
                    <td>{currentVehicles?.crew}</td>
                  </tr>
                  <tr>
                    <td>Passengers:</td>
                    <td>{currentVehicles?.passengers}</td>
                  </tr>
                  <tr>
                    <td>Cargo Capacity:</td>
                    <td>{currentVehicles?.cargo_capacity}</td>
                  </tr>
                  <tr>
                    <td>Consumables:</td>
                    <td>{currentVehicles?.consumables}</td>
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
  currentVehicles: state.vehiclesReducer.currentVehicles,
  isFetching: state.globalReducer.isFetching,
  thumbnails: state.thumbnailsReducer,
})

export const VehiclesDetailsContainer = connect(mapStateToProps, {
  fetchCurrentVehiclesData,
  setThumbnailsFilms,
  setThumbnailsPeople,
  resetThumbnailsStore,
})(VehiclesDetails)
