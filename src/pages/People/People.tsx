import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { CardMini } from '../../components/CardMini/CardMini'
import {
  fetchPeopleData,
  fetchSearchedPeopleData,
  fetchPeoplePageData,
} from '../../redux/actions/actionsPeople'
import { MainSearchField } from '../../stories/SearchField.stories'
import s from './People.module.scss'
import { Preloader } from '../../components/Preloader/Preloader'
import { Pagination } from '../../components/Pagination/Pagination'
import { createLinkForPaginationControls } from '../../utils/utils'

interface PeopleProps {
  fetchPeopleData: () => void
  people: any
  isFetching: boolean
  fetchSearchedPeopleData: () => void
  fetchPeoplePageData: () => void
}

const People: React.FC<PeopleProps> = ({
  fetchPeopleData,
  people,
  isFetching,
  fetchSearchedPeopleData,
  fetchPeoplePageData,
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
})(People)
