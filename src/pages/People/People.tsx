import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { CardMini } from '../../components/CardMini/CardMini'
import { Pagination } from '../../components/Pagination/Pagination'
import { Preloader } from '../../components/Preloader/Preloader'
import { addPeopleToFavorites } from '../../redux/actions/actionsFavorites'
import {
  fetchPeopleData,
  fetchPeoplePageData,
  fetchSearchedPeopleData,
} from '../../redux/actions/actionsPeople'
import { MainSearchField } from '../../stories/SearchField.stories'
import { createLinkForPaginationControls } from '../../utils/utils'
import s from './People.module.scss'

interface PeopleProps {
  fetchPeopleData: () => void
  people: any
  isFetching: boolean
  fetchSearchedPeopleData: () => void
  fetchPeoplePageData: () => void
  addPeopleToFavorites: any
}

const People: React.FC<PeopleProps> = ({
  fetchPeopleData,
  people,
  isFetching,
  fetchSearchedPeopleData,
  fetchPeoplePageData,
  addPeopleToFavorites,
}) => {
  useEffect(() => {
    fetchPeopleData()
  }, [])

  const linkForNextPagination = createLinkForPaginationControls(people?.next)
  const linkForPreviousPagination = createLinkForPaginationControls(
    people?.previous
  )

  return (
    <div className={s['people-wrapper']}>
      <MainSearchField
        placeholder={`Search among ${people?.count} people...`}
        handleSubmitCallback={fetchSearchedPeopleData}
      />
      {!isFetching && (
        <div className={s['people-inner']}>
          <div className={s['cards-holder']}>
            {people?.results.map((person: any) => {
              const personUrl = person.url.split('/').slice(-3, -1).join('/')
              return (
                <CardMini
                  data={person}
                  key={person.name}
                  dataUrl={`/${personUrl}/films`}
                  setToFavoritesCallback={addPeopleToFavorites}
                />
              )
            })}
          </div>
        </div>
      )}
      {isFetching && <Preloader />}
      <Pagination
        totalItems={people?.count}
        needItemsInPage={10}
        nextPage={linkForNextPagination}
        previousPage={linkForPreviousPagination}
        linkTemplate="people/?page="
        handleClickPageCallback={fetchPeoplePageData}
      />
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  people: state.peopleReducer.people,
  isFetching: state.globalReducer.isFetching,
})

export const PeopleContainer = connect(mapStateToProps, {
  fetchPeopleData,
  fetchSearchedPeopleData,
  fetchPeoplePageData,
  addPeopleToFavorites,
})(People)
