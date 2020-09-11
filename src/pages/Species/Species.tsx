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

interface SpeciesProps {
  fetchSpeciesData: () => void
  fetchSpeciesPageData: any
  fetchSearchedSpeciesData: any
  species: any
  isFetching: boolean
}

const Species: React.FC<SpeciesProps> = ({
  fetchSpeciesData,
  fetchSpeciesPageData,
  fetchSearchedSpeciesData,
  species,
  isFetching,
}) => {
  useEffect(() => {
    fetchSpeciesData()
  }, [])

  const linkForNextPagination = createLinkForPaginationControls(species?.next)
  const linkForPreviousPagination = createLinkForPaginationControls(
    species?.previous
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
})

export const SpeciesContainer = connect(mapStateToProps, {
  fetchSpeciesData,
  fetchSearchedSpeciesData,
  fetchSpeciesPageData,
})(Species)
