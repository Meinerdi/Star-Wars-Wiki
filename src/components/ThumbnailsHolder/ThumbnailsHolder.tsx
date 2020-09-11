import React from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import s from './ThumbnailsHolder.module.scss'

export const ThumbnailsHolder = ({
  thumbnails,
  rootLocation,
  enpointsOfThumbnails,
}: any) => {
  let arrayOfLinks = []
  if (Object.values(thumbnails).every((i): any => i)) {
    arrayOfLinks = Object.entries(thumbnails).map((arr: any) =>
      arr[1].length ? arr[0] : null
    )
  }

  const arrayOfFilteredLinks = arrayOfLinks.filter((i) => i !== null)

  const locationOfThumbnail = useLocation()
    .pathname.split('/')
    .slice(-1)
    .join('')

  return (
    <div className={s['thumbnails-wrapper']}>
      <ul className={s['links-holder']}>
        {arrayOfFilteredLinks.map((link) => {
          return (
            <li key={link} className={s['list-item']}>
              <NavLink
                to={`${rootLocation}/${link}`}
                className={s['nav-link']}
                activeClassName={s['active-link']}
              >
                {link}
              </NavLink>
            </li>
          )
        })}
      </ul>

      <div className={s['thumbnails-holder']}>
        <ul>
          {thumbnails[locationOfThumbnail] &&
            thumbnails[locationOfThumbnail].map((title: string[], idx: any) => {
              const link = enpointsOfThumbnails[locationOfThumbnail][idx]
                .split('/')
                .slice(-3)
                .join('/')
              return (
                <li key={title.toString()}>
                  <Link to={`/${link}`} className={s['thumb-link']}>
                    {title}
                  </Link>
                </li>
              )
            })}
        </ul>
      </div>
    </div>
  )
}
