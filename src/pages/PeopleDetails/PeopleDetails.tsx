import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import noImage from '../../assets/images/404.png'
import { Preloader } from '../../components/Preloader/Preloader'
import {
  fetchCurrentPeopleData,
  setThumbnailsFilms,
} from '../../redux/actions/actionsPeople'
import { createThumbnailResponseDispatcher } from '../../utils/utils'
import s from './PeopleDetails.module.scss'

const PeopleDetails = ({
  match,
  fetchCurrentPeopleData,
  currentPeople,
  isFetching,
  setThumbnailsFilms,
  thumbnailsPeople,
}: any) => {
  useEffect(() => {
    fetchCurrentPeopleData(match.params.id)
  }, [])

  if (currentPeople) {
    createThumbnailResponseDispatcher(currentPeople.films, setThumbnailsFilms)
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
          <div className={s['additional-info']}>
            <table>
              <tbody>
                <tr>
                  <td>Films: </td>
                  <td className={s['thumbnail-holder']}>
                    {currentPeople?.films.map((i: any, idx: any) => {
                      return (
                        <Link
                          to={`/${i.split('/').slice(-3).join('/')}`}
                          className={s['card-thumbnail']}
                        >
                          1
                        </Link>
                      )
                    })}
                  </td>
                </tr>
                <tr>
                  <td>Homeworld: </td>
                  <td>{currentPeople?.homeworld}</td>
                </tr>
                <tr>
                  <td>Starships: </td>
                  <td>
                    {!currentPeople?.starships.length
                      ? 'Currently unknown'
                      : currentPeople?.starships}
                  </td>
                </tr>
                <tr>
                  <td>Vehicles: </td>
                  <td>{currentPeople?.vehicles}</td>
                </tr>
                <tr>
                  <td>Species: </td>
                  <td>{currentPeople?.species}</td>
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
  currentPeople: state.peopleReducer.currentPeople,
  thumbnailsPeople: state.peopleReducer.thumbnailsPeople,
  isFetching: state.globalReducer.isFetching,
})

export const PeopleDetailsContainer = connect(mapStateToProps, {
  fetchCurrentPeopleData,
  setThumbnailsFilms,
})(PeopleDetails)
