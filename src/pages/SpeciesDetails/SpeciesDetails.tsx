import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import noImage from '../../assets/images/404.png'
import { Preloader } from '../../components/Preloader/Preloader'
import { ThumbnailsHolder } from '../../components/ThumbnailsHolder/ThumbnailsHolder'
import { fetchCurrentSpeciesData } from '../../redux/actions/actionsSpecies'
import {
  setThumbnailsFilms,
  setThumbnailsHomeworld,
  setThumbnailsPeople,
  resetThumbnailsStore,
} from '../../redux/actions/actionsThumbnails'
import { createThumbnailResponseDispatcher } from '../../utils/utils'
import s from './SpeciesDetails.module.scss'

const SpeciesDetails = ({
  match,
  fetchCurrentSpeciesData,
  currentSpecies,
  isFetching,
  thumbnails,
  setThumbnailsFilms,
  setThumbnailsHomeworld,
  setThumbnailsPeople,
  resetThumbnailsStore,
}: any) => {
  useEffect(() => {
    fetchCurrentSpeciesData(match.params.id)

    return () => {
      resetThumbnailsStore()
    }
  }, [])

  useEffect(() => {
    if (currentSpecies) {
      createThumbnailResponseDispatcher(
        currentSpecies.films,
        setThumbnailsFilms
      )
      createThumbnailResponseDispatcher(
        [currentSpecies.homeworld],
        setThumbnailsHomeworld
      )
      createThumbnailResponseDispatcher(
        currentSpecies.people,
        setThumbnailsPeople
      )
    }
  }, [currentSpecies])

  const enpointsOfThumbnails = {
    films: currentSpecies?.films,
    homeworld: [currentSpecies?.homeworld],
    people: currentSpecies?.people,
  }

  return (
    <div className={s['card-wrapper']}>
      {isFetching && <Preloader />}

      {!isFetching && (
        <>
          <div className={s['card-inner']}>
            <img
              src={noImage}
              alt="Species Avatar"
              className={s['species-avatar']}
            />
            <div className={s['species-info']}>
              <table className={s['species-info-list']}>
                <tbody>
                  <tr>
                    <td>Name:</td>
                    <td>{currentSpecies?.name}</td>
                  </tr>
                  <tr>
                    <td>Classification:</td>
                    <td>{currentSpecies?.classification}</td>
                  </tr>
                  <tr>
                    <td>Designation:</td>
                    <td>{currentSpecies?.designation}</td>
                  </tr>
                  <tr>
                    <td>Language:</td>
                    <td>{currentSpecies?.language}</td>
                  </tr>
                  <tr>
                    <td>Average Height:</td>
                    <td>{currentSpecies?.average_height} sm</td>
                  </tr>
                  <tr>
                    <td>Skin Colors:</td>
                    <td>{currentSpecies?.skin_colors}</td>
                  </tr>
                  <tr>
                    <td>Hair Colors:</td>
                    <td>{currentSpecies?.hair_colors}</td>
                  </tr>
                  <tr>
                    <td>Average Lifespan:</td>
                    <td>{currentSpecies?.average_lifespan} years</td>
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
  currentSpecies: state.speciesReducer.currentSpecies,
  isFetching: state.globalReducer.isFetching,
  thumbnails: state.thumbnailsReducer,
})

export const SpeciesDetailsContainer = connect(mapStateToProps, {
  fetchCurrentSpeciesData,
  setThumbnailsFilms,
  setThumbnailsHomeworld,
  setThumbnailsPeople,
  resetThumbnailsStore,
})(SpeciesDetails)
