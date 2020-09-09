import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import s from './Pagination.module.scss'

interface PaginationProps {
  totalItems: number
  needItemsInPage: number
  nextPage: string | null
  previousPage: string | null
  linkTemplate: string
  handleClickPageCallback: any
}

export const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  needItemsInPage,
  nextPage,
  previousPage,
  linkTemplate,
  handleClickPageCallback,
}: any) => {
  const pagesCount = Math.ceil(totalItems / needItemsInPage)
  const pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  const createPageIdForButtonControls = (pageLink: string) => {
    if (!pageLink) return null
    return pageLink.split('=').slice(-1).join('')
  }

  const nextPageId = createPageIdForButtonControls(nextPage)
  const prevPageId = createPageIdForButtonControls(previousPage)

  return (
    <div className={s['pagination-wrapper']}>
      <Link
        to={`/${previousPage}`}
        className={`${s['control-button']} ${!previousPage && s.disabled}`}
        onClick={() => handleClickPageCallback(prevPageId)}
      >
        Previous
      </Link>
      <ul className={s['paginataion-list']}>
        {pages.map((page) => {
          return (
            <li key={`/${linkTemplate}${page}`}>
              <NavLink
                to={`/${linkTemplate}${page}`}
                onClick={() => handleClickPageCallback(page)}
                className={s['list-item']}
              >
                {page}
              </NavLink>
            </li>
          )
        })}
      </ul>
      <Link
        to={`/${nextPage}`}
        className={`${s['control-button']} ${!nextPage && s.disabled}`}
        onClick={() => handleClickPageCallback(nextPageId)}
      >
        Next
      </Link>
    </div>
  )
}
