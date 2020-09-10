import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import noImage from '../../assets/images/404.png'
import { Preloader } from '../../components/Preloader/Preloader'
import { fetchCurrentFilmsData } from '../../redux/actions/actionsFilms'
import s from './FilmsDetails.module.scss'

const FilmsDetails = ({
  match,
  fetchCurrentFilmsData,
  currentFilms,
  isFetching,
}: any) => {
  useEffect(() => {
    fetchCurrentFilmsData(match.params.id)
  }, [])

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
          <div className={s['additional-info']}>
            <table>
              <tbody>
                <tr>
                  <td>Characters: </td>
                  <td>{currentFilms?.characters}</td>
                </tr>
                <tr>
                  <td>Planets: </td>
                  <td>{currentFilms?.planets}</td>
                </tr>
                <tr>
                  <td>Starships: </td>
                  <td>{currentFilms?.starships}</td>
                </tr>
                <tr>
                  <td>Vehicles: </td>
                  <td>{currentFilms?.vehicles}</td>
                </tr>
                <tr>
                  <td>Species: </td>
                  <td>{currentFilms?.species}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  currentFilms: state.filmsReducer.currentFilms,
  isFetching: state.globalReducer.isFetching,
})

export const FilmsDetailsContainer = connect(mapStateToProps, {
  fetchCurrentFilmsData,
})(FilmsDetails)
