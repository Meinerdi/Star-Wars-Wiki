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
import {
  addFilmsToFavorites,
  removeFilmsFromFavorites,
} from '../../redux/actions/actionsFavorites'

interface FilmsProps {
  fetchFilmsData: () => void
  films: any
  isFetching: boolean
  fetchSearchedFilmsData: () => void
  fetchFilmsPageData: () => void
  addFilmsToFavorites: any
  removeFilmsFromFavorites: any
  favorites: any
}

const Films: React.FC<FilmsProps> = ({
  fetchFilmsData,
  films,
  isFetching,
  fetchSearchedFilmsData,
  fetchFilmsPageData,
  addFilmsToFavorites,
  removeFilmsFromFavorites,
  favorites,
}) => {
  useEffect(() => {
    fetchFilmsData()
  }, [])

  const linkForNextPagination = createLinkForPaginationControls(films?.next)
  const linkForPreviousPagination = createLinkForPaginationControls(
    films?.previous
  )

  const favoritesInFilms = favorites.map((i: any) => i.url)

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
                  dataUrl={`/${filmUrl}/people`}
                  setToFavoritesCallback={addFilmsToFavorites}
                  isFavorite={favoritesInFilms.some((i: any) => i === film.url)}
                  removeFromFavoritesCallback={removeFilmsFromFavorites}
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
  favorites: state.favoritesReducer.films,
})

export const FilmsContainer = connect(mapStateToProps, {
  fetchFilmsData,
  fetchSearchedFilmsData,
  fetchFilmsPageData,
  addFilmsToFavorites,
  removeFilmsFromFavorites,
})(Films)
