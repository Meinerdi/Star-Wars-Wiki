import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import noImage from '../../assets/images/404.png'
import { Preloader } from '../../components/Preloader/Preloader'
import { fetchCurrentSpeciesData } from '../../redux/actions/actionsSpecies'
import s from './SpeciesDetails.module.scss'

const SpeciesDetails = ({
  match,
  fetchCurrentSpeciesData,
  currentSpecies,
  isFetching,
}: any) => {
  useEffect(() => {
    fetchCurrentSpeciesData(match.params.id)
  }, [])

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
          <div className={s['additional-info']}>
            <table>
              <tbody>
                <tr>
                  <td>People: </td>
                  <td>{currentSpecies?.people}</td>
                </tr>
                <tr>
                  <td>Homeworld: </td>
                  <td>{currentSpecies?.homeworld}</td>
                </tr>
                <tr>
                  <td>Films: </td>
                  <td>{currentSpecies?.films}</td>
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
  currentSpecies: state.speciesReducer.currentSpecies,
  isFetching: state.globalReducer.isFetching,
})

export const SpeciesDetailsContainer = connect(mapStateToProps, {
  fetchCurrentSpeciesData,
})(SpeciesDetails)
