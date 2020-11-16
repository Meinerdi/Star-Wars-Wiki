import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useLocation } from 'react-router-dom'
import { CardMini } from '../../components/CardMini/CardMini'
import { removeFavoritesFromFavoritesPage } from '../../redux/actions/actionsFavorites'
import s from './Favorites.module.scss'
import { RootState } from '../../redux/store'

export const Favorites = () => {
  const favorites = useSelector((state: RootState) => state.favoritesReducer)
  const location = useLocation().pathname.split('/').slice(-1).join('')
  const dispatch = useDispatch()

  const handleRemoveFromFavorites = (item: any, key: string | undefined) => {
    dispatch(removeFavoritesFromFavoritesPage(item, key))
  }

  return (
    <div className={s['favorites-wrapper']}>
      <nav className={s['links-nav']}>
        <ul className={s['links-list']}>
          {Object.keys(favorites).map((i) => (
            <li key={i}>
              <NavLink
                to={`/favorites/${i}`}
                activeClassName={s['active-favorite-link']}
              >
                {i.toUpperCase()}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className={s['favorites-holder']}>
        <div className={s['favorites-cards-inner']}>
          {favorites[location]?.map((i: any) => {
            const cardUrl = i.url.split('/').slice(-3, -1).join('/')
            return (
              <CardMini
                data={i}
                key={i.name}
                dataUrl={`/${cardUrl}/`}
                isFavorite
                removeFromFavoritesCallback={handleRemoveFromFavorites}
                location={location}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
