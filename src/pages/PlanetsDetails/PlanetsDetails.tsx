import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import noImage from '../../assets/images/404.png'
import { Preloader } from '../../components/Preloader/Preloader'
import { fetchCurrentPlanetsData } from '../../redux/actions/actionsPlanets'
import s from './PlanetsDetails.module.scss'

const PlanetsDetails = ({
  match,
  fetchCurrentPlanetsData,
  currentPlanets,
  isFetching,
}: any) => {
  useEffect(() => {
    fetchCurrentPlanetsData(match.params.id)
  }, [])

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
          <div className={s['additional-info']}>
            <table>
              <tbody>
                <tr>
                  <td>Residents: </td>
                  <td>{currentPlanets?.residents}</td>
                </tr>
                <tr>
                  <td>Films: </td>
                  <td>{currentPlanets?.films}</td>
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
  currentPlanets: state.planetsReducer.currentPlanets,
  isFetching: state.globalReducer.isFetching,
})

export const PlanetsDetailsContainer = connect(mapStateToProps, {
  fetchCurrentPlanetsData,
})(PlanetsDetails)
