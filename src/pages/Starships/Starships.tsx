import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { CardMini } from '../../components/CardMini/CardMini'
import {
  fetchStarshipsData,
  fetchSearchedStarshipsData,
  fetchStarshipsPageData,
} from '../../redux/actions/actionsStarships'
import { MainSearchField } from '../../stories/SearchField.stories'
import s from './Starships.module.scss'
import { Preloader } from '../../components/Preloader/Preloader'
import { Pagination } from '../../components/Pagination/Pagination'
import { createLinkForPaginationControls } from '../../utils/utils'

interface StarshipsProps {
  fetchStarshipsData: () => void
  starships: any
  isFetching: boolean
  fetchSearchedStarshipsData: () => void
  fetchStarshipsPageData: () => void
}

const Starships: React.FC<StarshipsProps> = ({
  fetchStarshipsData,
  starships,
  isFetching,
  fetchSearchedStarshipsData,
  fetchStarshipsPageData,
}) => {
  useEffect(() => {
    fetchStarshipsData()
  }, [])

  const linkForNextPagination = createLinkForPaginationControls(starships?.next)
  const linkForPreviousPagination = createLinkForPaginationControls(
    starships?.previous
  )

  return (
    <div className={s['starships-wrapper']}>
      <MainSearchField
        placeholder={`Search among ${starships?.count} starships...`}
        handleSubmitCallback={fetchSearchedStarshipsData}
      />
      {!isFetching && (
        <div className={s['starships-inner']}>
          <div className={s['cards-holder']}>
            {starships?.results.map((starship: any) => {
              const starshipUrl = starship.url
                .split('/')
                .slice(-3, -1)
                .join('/')
              return (
                <CardMini
                  data={starship}
                  key={starship.name}
                  dataUrl={`/${starshipUrl}/films`}
                />
              )
            })}
          </div>
        </div>
      )}
      {isFetching && <Preloader />}
      <Pagination
        totalItems={starships?.count}
        needItemsInPage={10}
        nextPage={linkForNextPagination}
        previousPage={linkForPreviousPagination}
        linkTemplate="starships/?page="
        handleClickPageCallback={fetchStarshipsPageData}
      />
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  starships: state.starshipsReducer.starships,
  isFetching: state.globalReducer.isFetching,
})

export const StarshipsContainer = connect(mapStateToProps, {
  fetchStarshipsData,
  fetchSearchedStarshipsData,
  fetchStarshipsPageData,
})(Starships)
