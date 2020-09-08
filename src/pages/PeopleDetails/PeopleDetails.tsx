import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import noImage from '../../assets/images/404.png'
import { Preloader } from '../../components/Preloader/Preloader'
import { fetchCurrentUserData } from '../../redux/actions/actions'
import s from './PeopleDetails.module.scss'

const PeopleDetails = ({ match, fetchCurrentUserData, currentPeople }: any) => {
  useEffect(() => {
    fetchCurrentUserData(match.params.id)
  }, [])

  return (
    <div className={s['card-wrapper']}>
      {!currentPeople && <Preloader />}
      {currentPeople && (
        <>
          <div className={s['card-inner']}>
            <img
              src={noImage}
              alt="Person Avatar"
              className={s['person-avatar']}
            />
            <div className={s['personal-info']}>
              <table className={s['personal-info-list']}>
                <tr>
                  <td>Name:</td> <td>{currentPeople?.name}</td>
                </tr>
                <tr>
                  <td>Gender:</td> <td>{currentPeople?.gender}</td>
                </tr>
                <tr>
                  <td>Birthday:</td> <td>{currentPeople?.birth_year}</td>
                </tr>
                <tr>
                  <td>Eyes Color:</td> <td>{currentPeople?.eye_color}</td>
                </tr>
                <tr>
                  <td>Hair Color:</td> <td>{currentPeople?.hair_color}</td>
                </tr>
                <tr>
                  <td>Skin Color:</td> <td>{currentPeople?.skin_color}</td>
                </tr>
                <tr>
                  <td>Height:</td> <td>{currentPeople?.height} sm</td>
                </tr>
                <tr>
                  <td>Mass:</td> <td>{currentPeople?.mass} kg</td>
                </tr>
              </table>
            </div>
          </div>
          <div className={s['additional-info']}>
            <table>
              <tr>
                <td>Homeworld: </td>
                <td>{currentPeople?.homeworld}</td>
              </tr>
              <tr>
                <td>Starships: </td>
                <td>{currentPeople?.starships}</td>
              </tr>
              <tr>
                <td>Vehicles: </td>
                <td>{currentPeople?.vehicles}</td>
              </tr>
              <tr>
                <td>Species: </td>
                <td>{currentPeople?.species}</td>
              </tr>
              <tr>
                <td>Films: </td>
                <td>{currentPeople?.films}</td>
              </tr>
            </table>
          </div>
        </>
      )}
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  currentPeople: state.ajaxReducer.currentPeople,
})

export const PeopleDetailsContainer = connect(mapStateToProps, {
  fetchCurrentUserData,
})(PeopleDetails)
