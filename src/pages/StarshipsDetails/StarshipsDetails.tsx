import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import noImage from '../../assets/images/404.png'
import { Preloader } from '../../components/Preloader/Preloader'
import { fetchCurrentStarshipsData } from '../../redux/actions/actionsStarships'
import s from './StarshipsDetails.module.scss'
import { ThumbnailsHolder } from '../../components/ThumbnailsHolder/ThumbnailsHolder'
import {
  setThumbnailsFilms,
  setThumbnailsPeople,
  resetThumbnailsStore,
} from '../../redux/actions/actionsThumbnails'
import { createThumbnailResponseDispatcher } from '../../utils/utils'

const StarshipsDetails = ({
  match,
  fetchCurrentStarshipsData,
  currentStarships,
  isFetching,
  setThumbnailsFilms,
  setThumbnailsPeople,
  resetThumbnailsStore,
  thumbnails,
}: any) => {
  useEffect(() => {
    fetchCurrentStarshipsData(match.params.id)

    return () => {
      resetThumbnailsStore()
    }
  }, [])

  useEffect(() => {
    if (currentStarships) {
      createThumbnailResponseDispatcher(
        currentStarships.films,
        setThumbnailsFilms
      )
      createThumbnailResponseDispatcher(
        currentStarships.pilots,
        setThumbnailsPeople
      )
    }
  }, [currentStarships])

  const enpointsOfThumbnails = {
    films: currentStarships?.films,
    people: currentStarships?.pilots,
  }

  return (
    <div className={s['card-wrapper']}>
      {isFetching && <Preloader />}

      {!isFetching && (
        <>
          <div className={s['card-inner']}>
            <img src={noImage} alt="Avatar" className={s['starship-avatar']} />
            <div className={s['starship-info']}>
              <table className={s['starship-info-list']}>
                <tbody>
                  <tr>
                    <td>Name:</td>
                    <td>{currentStarships?.name}</td>
                  </tr>
                  <tr>
                    <td>Model:</td>
                    <td>{currentStarships?.model}</td>
                  </tr>
                  <tr>
                    <td>Class:</td>
                    <td>{currentStarships?.starship_class}</td>
                  </tr>
                  <tr>
                    <td>Manufacturer:</td>
                    <td>{currentStarships?.manufacturer}</td>
                  </tr>
                  <tr>
                    <td>Cost:</td>
                    <td>{currentStarships?.cost_in_credits}</td>
                  </tr>
                  <tr>
                    <td>Length:</td>
                    <td>{currentStarships?.length}</td>
                  </tr>
                  <tr>
                    <td>Max Speed:</td>
                    <td>{currentStarships?.max_atmosphering_speed}</td>
                  </tr>
                  <tr>
                    <td>Crew:</td>
                    <td>{currentStarships?.crew}</td>
                  </tr>
                  <tr>
                    <td>Passengers:</td>
                    <td>{currentStarships?.passengers}</td>
                  </tr>
                  <tr>
                    <td>Cargo Capacity:</td>
                    <td>{currentStarships?.cargo_capacity}</td>
                  </tr>
                  <tr>
                    <td>Consumables:</td>
                    <td>{currentStarships?.consumables}</td>
                  </tr>
                  <tr>
                    <td>Hyperdrive Rating:</td>
                    <td>{currentStarships?.hyperdrive_rating}</td>
                  </tr>
                  <tr>
                    <td>MGLT:</td>
                    <td>{currentStarships?.MGLT}</td>
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
  currentStarships: state.starshipsReducer.currentStarships,
  isFetching: state.globalReducer.isFetching,
  thumbnails: state.thumbnailsReducer,
})

export const StarshipsDetailsContainer = connect(mapStateToProps, {
  fetchCurrentStarshipsData,
  setThumbnailsFilms,
  setThumbnailsPeople,
  resetThumbnailsStore,
})(StarshipsDetails)
