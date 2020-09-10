import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import noImage from '../../assets/images/404.png'
import { Preloader } from '../../components/Preloader/Preloader'
import { fetchCurrentVehiclesData } from '../../redux/actions/actionsVehicles'
import s from './VehiclesDetails.module.scss'

const VehiclesDetails = ({
  match,
  fetchCurrentVehiclesData,
  currentVehicles,
  isFetching,
}: any) => {
  useEffect(() => {
    fetchCurrentVehiclesData(match.params.id)
  }, [])

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
          <div className={s['additional-info']}>
            <table>
              <tbody>
                <tr>
                  <td>Pilots: </td>
                  <td>{currentVehicles?.pilots}</td>
                </tr>
                <tr>
                  <td>Films: </td>
                  <td>{currentVehicles?.films}</td>
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
  currentVehicles: state.vehiclesReducer.currentVehicles,
  isFetching: state.globalReducer.isFetching,
})

export const VehiclesDetailsContainer = connect(mapStateToProps, {
  fetchCurrentVehiclesData,
})(VehiclesDetails)
