import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { CardMini } from '../../components/CardMini/CardMini'
import {
  fetchSpeciesData,
  fetchSearchedSpeciesData,
  fetchSpeciesPageData,
} from '../../redux/actions/actionsSpecies'
import { MainSearchField } from '../../stories/SearchField.stories'
import s from './Species.module.scss'
import { Preloader } from '../../components/Preloader/Preloader'
import { Pagination } from '../../components/Pagination/Pagination'
import { createLinkForPaginationControls } from '../../utils/utils'
import {
  addSpeciesToFavorites,
  removeSpeciesFromFavorites,
} from '../../redux/actions/actionsFavorites'

interface SpeciesProps {
  fetchSpeciesData: () => void
  fetchSpeciesPageData: (pageNumber: string) => void
  fetchSearchedSpeciesData: (searchedText: string) => void
  species: any
  isFetching: boolean
  addSpeciesToFavorites: () => void
  removeSpeciesFromFavorites: () => void
  favorites: []
}

const Species: React.FC<SpeciesProps> = ({
  fetchSpeciesData,
  fetchSpeciesPageData,
  fetchSearchedSpeciesData,
  species,
  isFetching,
  addSpeciesToFavorites,
  favorites,
  removeSpeciesFromFavorites,
}) => {
  useEffect(() => {
    fetchSpeciesData()
  }, [])

  const linkForNextPagination = createLinkForPaginationControls(species?.next)
  const linkForPreviousPagination = createLinkForPaginationControls(
    species?.previous
  )

  const favoritesInSpecies = favorites.map(
    (i: Record<string, unknown>) => i.url
  )

  return (
    <div className={s['species-wrapper']}>
      <MainSearchField
        placeholder={`Search among ${species?.count} species...`}
        handleSubmitCallback={fetchSearchedSpeciesData}
      />
      {!isFetching && (
        <div className={s['species-inner']}>
          <div className={s['cards-holder']}>
            {species?.results.map((species: any) => {
              const speciesUrl = species.url.split('/').slice(-3, -1).join('/')
              return (
                <CardMini
                  data={species}
                  key={species.name}
                  dataUrl={`/${speciesUrl}/films`}
                  setToFavoritesCallback={addSpeciesToFavorites}
                  isFavorite={favoritesInSpecies.some(
                    (i: any) => i === species.url
                  )}
                  removeFromFavoritesCallback={removeSpeciesFromFavorites}
                />
              )
            })}
          </div>
        </div>
      )}
      {isFetching && <Preloader />}
      <Pagination
        totalItems={species?.count}
        needItemsInPage={10}
        nextPage={linkForNextPagination}
        previousPage={linkForPreviousPagination}
        linkTemplate="species/?page="
        handleClickPageCallback={fetchSpeciesPageData}
      />
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  species: state.speciesReducer.species,
  isFetching: state.globalReducer.isFetching,
  favorites: state.favoritesReducer.species,
})

export const SpeciesContainer = connect(mapStateToProps, {
  fetchSpeciesData,
  fetchSearchedSpeciesData,
  fetchSpeciesPageData,
  addSpeciesToFavorites,
  removeSpeciesFromFavorites,
})(Species)
