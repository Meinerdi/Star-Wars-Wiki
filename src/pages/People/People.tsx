import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { CardMini } from '../../components/CardMini/CardMini'
import { fetchUsersData } from '../../redux/actions/actions'
import { MainSearchField } from '../../stories/SearchField.stories'
import s from './People.module.scss'
import { Preloader } from '../../components/Preloader/Preloader'

interface PeopleProps {
  fetchUsersData: () => void
  people: any
  isFetching: boolean
}

const People: React.FC<PeopleProps> = ({
  fetchUsersData,
  people,
  isFetching,
}) => {
  useEffect(() => {
    fetchUsersData()
  }, [])

  return (
    <div>
      {!isFetching && (
        <>
          <MainSearchField
            placeholder={`Search among ${people?.count} people...`}
          />
          <div className={s['cards-holder']}>
            {people?.results.map((person: any) => {
              const personUrl = person.url.split('/').slice(-3, -1).join('/')
              return (
                <CardMini
                  person={person}
                  key={person.name}
                  personUrl={personUrl}
                />
              )
            })}
          </div>
        </>
      )}
      {isFetching && <Preloader />}
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  people: state.ajaxReducer.people,
  isFetching: state.ajaxReducer.isFetching,
})

export const PeopleContainer = connect(mapStateToProps, { fetchUsersData })(
  People
)