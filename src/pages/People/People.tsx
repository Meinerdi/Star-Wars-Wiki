import React, { useEffect } from 'react'
import { API } from '../../api/api'
import { SearchField } from '../../components/SearchField/SearchField'

export const People = () => {
  // useEffect(() => {
  //   API.getAllUsers().then((response) => console.log(response))
  // }, [])
  return (
    <div>
      <SearchField placeholder="Search people..." />
      There is should be cards, pagination, arrows
    </div>
  )
}
