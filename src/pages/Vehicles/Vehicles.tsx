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
import {
  addVehiclesToFavorites,
  removeVehiclesFromFavorites,
} from '../../redux/actions/actionsFavorites'

interface VehiclesProps {
  fetchVehiclesData: () => void
  vehicles: any
  isFetching: boolean
  fetchSearchedVehiclesData: () => void
  fetchVehiclesPageData: () => void
  addVehiclesToFavorites: any
  removeVehiclesFromFavorites: any
  favorites: any
}

const Vehicles: React.FC<VehiclesProps> = ({
  fetchVehiclesData,
  vehicles,
  isFetching,
  fetchSearchedVehiclesData,
  fetchVehiclesPageData,
  addVehiclesToFavorites,
  favorites,
  removeVehiclesFromFavorites,
}) => {
  useEffect(() => {
    fetchVehiclesData()
  }, [])

  const linkForNextPagination = createLinkForPaginationControls(vehicles?.next)
  const linkForPreviousPagination = createLinkForPaginationControls(
    vehicles?.previous
  )

  const favoritesInVehicles = favorites.map((i: any) => i.url)

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
                  dataUrl={`/${vehicleUrl}/films`}
                  setToFavoritesCallback={addVehiclesToFavorites}
                  isFavorite={favoritesInVehicles.some(
                    (i: any) => i === vehicle.url
                  )}
                  removeFromFavoritesCallback={removeVehiclesFromFavorites}
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
  favorites: state.favoritesReducer.vehicles,
})

export const VehiclesContainer = connect(mapStateToProps, {
  fetchVehiclesData,
  fetchSearchedVehiclesData,
  fetchVehiclesPageData,
  addVehiclesToFavorites,
  removeVehiclesFromFavorites,
})(Vehicles)
