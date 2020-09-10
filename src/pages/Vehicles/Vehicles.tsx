import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { CardMini } from '../../components/CardMini/CardMini'
import {
  fetchVehiclesData,
  fetchSearchedVehiclesData,
  fetchVehiclesPageData,
} from '../../redux/actions/actionsVehicles'
import { MainSearchField } from '../../stories/SearchField.stories'
import s from './Vehicles.module.scss'
import { Preloader } from '../../components/Preloader/Preloader'
import { Pagination } from '../../components/Pagination/Pagination'
import { createLinkForPaginationControls } from '../../utils/utils'

interface VehiclesProps {
  fetchVehiclesData: () => void
  vehicles: any
  isFetching: boolean
  fetchSearchedVehiclesData: () => void
  fetchVehiclesPageData: () => void
}

const Vehicles: React.FC<VehiclesProps> = ({
  fetchVehiclesData,
  vehicles,
  isFetching,
  fetchSearchedVehiclesData,
  fetchVehiclesPageData,
}) => {
  useEffect(() => {
    fetchVehiclesData()
  }, [])

  const linkForNextPagination = createLinkForPaginationControls(vehicles?.next)
  const linkForPreviousPagination = createLinkForPaginationControls(
    vehicles?.previous
  )

  return (
    <div className={s['vehicles-wrapper']}>
      <MainSearchField
        placeholder={`Search among ${vehicles?.count} vehicles...`}
        handleSubmitCallback={fetchSearchedVehiclesData}
      />
      {!isFetching && (
        <div className={s['vehicles-inner']}>
          <div className={s['cards-holder']}>
            {vehicles?.results.map((vehicle: any) => {
              const vehicleUrl = vehicle.url.split('/').slice(-3, -1).join('/')
              return (
                <CardMini
                  data={vehicle}
                  key={vehicle.name}
                  dataUrl={`/${vehicleUrl}`}
                />
              )
            })}
          </div>
        </div>
      )}
      {isFetching && <Preloader />}
      <Pagination
        totalItems={vehicles?.count}
        needItemsInPage={10}
        nextPage={linkForNextPagination}
        previousPage={linkForPreviousPagination}
        linkTemplate="vehicles/?page="
        handleClickPageCallback={fetchVehiclesPageData}
      />
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  vehicles: state.vehiclesReducer.vehicles,
  isFetching: state.globalReducer.isFetching,
})

export const VehiclesContainer = connect(mapStateToProps, {
  fetchVehiclesData,
  fetchSearchedVehiclesData,
  fetchVehiclesPageData,
})(Vehicles)
