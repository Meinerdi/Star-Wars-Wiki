import React from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import s from './ThumbnailsHolder.module.scss'

export const ThumbnailsHolder = ({
  thumbnails,
  rootLocation,
  enpointsOfThumbnails,
}: any) => {
  const locationOfThumbnail = useLocation()
    .pathname.split('/')
    .slice(-1)
    .join('')

  return (
    <div className={s['thumbnails-wrapper']}>
      <ul className={s['links-holder']}>
        {Object.keys(enpointsOfThumbnails).map((link) => {
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
        <ul className={s['thumbnails-info-list']}>
          {thumbnails[locationOfThumbnail] &&
            thumbnails[locationOfThumbnail].map((title: string[], idx: any) => {
              const link = enpointsOfThumbnails[locationOfThumbnail][idx]
                .split('/')
                .slice(-3)
                .join('/')
              return (
                <li key={title.toString()} className={s['info-list-item']}>
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
