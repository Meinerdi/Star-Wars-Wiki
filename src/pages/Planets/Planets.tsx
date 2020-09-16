import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { CardMini } from '../../components/CardMini/CardMini'
import {
  fetchPlanetsData,
  fetchSearchedPlanetsData,
  fetchPlanetsPageData,
} from '../../redux/actions/actionsPlanets'
import { MainSearchField } from '../../stories/SearchField.stories'
import s from './Planets.module.scss'
import { Preloader } from '../../components/Preloader/Preloader'
import { Pagination } from '../../components/Pagination/Pagination'
import { createLinkForPaginationControls } from '../../utils/utils'
import {
  addPlanetsToFavorites,
  removePlanetsFromFavorites,
} from '../../redux/actions/actionsFavorites'

interface PlanetsProps {
  fetchPlanetsData: () => void
  planets: any
  isFetching: boolean
  fetchSearchedPlanetsData: () => void
  fetchPlanetsPageData: () => void
  addPlanetsToFavorites: () => void
  removePlanetsFromFavorites: () => void
  favorites: []
}

const Planets: React.FC<PlanetsProps> = ({
  fetchPlanetsData,
  planets,
  isFetching,
  fetchSearchedPlanetsData,
  fetchPlanetsPageData,
  addPlanetsToFavorites,
  removePlanetsFromFavorites,
  favorites,
}) => {
  useEffect(() => {
    fetchPlanetsData()
  }, [])

  const linkForNextPagination = createLinkForPaginationControls(planets?.next)
  const linkForPreviousPagination = createLinkForPaginationControls(
    planets?.previous
  )

  const favoritesInPlanets = favorites.map((i: any) => i.url)

  return (
    <div className={s['planets-wrapper']}>
      <MainSearchField
        placeholder={`Search among ${planets?.count} planets...`}
        handleSubmitCallback={fetchSearchedPlanetsData}
      />
      {!isFetching && (
        <div className={s['planets-inner']}>
          <div className={s['cards-holder']}>
            {planets?.results.map((planet: any) => {
              const planetUrl = planet.url.split('/').slice(-3, -1).join('/')
              return (
                <CardMini
                  data={planet}
                  key={planet.name}
                  dataUrl={`/${planetUrl}/films`}
                  setToFavoritesCallback={addPlanetsToFavorites}
                  isFavorite={favoritesInPlanets.some(
                    (i: string) => i === planet.url
                  )}
                  removeFromFavoritesCallback={removePlanetsFromFavorites}
                />
              )
            })}
          </div>
        </div>
      )}
      {isFetching && <Preloader />}
      <Pagination
        totalItems={planets?.count}
        needItemsInPage={10}
        nextPage={linkForNextPagination}
        previousPage={linkForPreviousPagination}
        linkTemplate="planets/?page="
        handleClickPageCallback={fetchPlanetsPageData}
      />
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  planets: state.planetsReducer.planets,
  isFetching: state.globalReducer.isFetching,
  favorites: state.favoritesReducer.planets,
})

export const PlanetsContainer = connect(mapStateToProps, {
  fetchPlanetsData,
  fetchSearchedPlanetsData,
  fetchPlanetsPageData,
  addPlanetsToFavorites,
  removePlanetsFromFavorites,
})(Planets)
