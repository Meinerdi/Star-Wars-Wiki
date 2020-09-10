import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { CardMini } from '../../components/CardMini/CardMini'
import {
  fetchFilmsData,
  fetchSearchedFilmsData,
  fetchFilmsPageData,
} from '../../redux/actions/actionsFilms'
import { MainSearchField } from '../../stories/SearchField.stories'
import s from './Films.module.scss'
import { Preloader } from '../../components/Preloader/Preloader'
import { Pagination } from '../../components/Pagination/Pagination'
import { createLinkForPaginationControls } from '../../utils/utils'

interface FilmsProps {
  fetchFilmsData: () => void
  films: any
  isFetching: boolean
  fetchSearchedFilmsData: () => void
  fetchFilmsPageData: () => void
}

const Films: React.FC<FilmsProps> = ({
  fetchFilmsData,
  films,
  isFetching,
  fetchSearchedFilmsData,
  fetchFilmsPageData,
}) => {
  useEffect(() => {
    fetchFilmsData()
  }, [])

  const linkForNextPagination = createLinkForPaginationControls(films?.next)
  const linkForPreviousPagination = createLinkForPaginationControls(
    films?.previous
  )

  return (
    <div className={s['films-wrapper']}>
      <MainSearchField
        placeholder={`Search among ${films?.count} films...`}
        handleSubmitCallback={fetchSearchedFilmsData}
      />
      {!isFetching && (
        <div className={s['films-inner']}>
          <div className={s['cards-holder']}>
            {films?.results.map((film: any) => {
              const filmUrl = film.url.split('/').slice(-3, -1).join('/')
              return (
                <CardMini
                  data={film}
                  key={film.title}
                  dataUrl={`/${filmUrl}`}
                />
              )
            })}
          </div>
        </div>
      )}
      {isFetching && <Preloader />}
      <Pagination
        totalItems={films?.count}
        needItemsInPage={10}
        nextPage={linkForNextPagination}
        previousPage={linkForPreviousPagination}
        linkTemplate="films/?page="
        handleClickPageCallback={fetchFilmsPageData}
      />
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  films: state.filmsReducer.films,
  isFetching: state.globalReducer.isFetching,
})

export const FilmsContainer = connect(mapStateToProps, {
  fetchFilmsData,
  fetchSearchedFilmsData,
  fetchFilmsPageData,
})(Films)
