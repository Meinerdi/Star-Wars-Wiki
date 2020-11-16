import React from 'react'
import { Link } from 'react-router-dom'
import noImage from '../../assets/images/404.png'
import s from './CardMini.module.scss'

type Props = {
  dataUrl: string
  data: any
  setToFavoritesCallback?: any
  isFavorite: boolean
  location?: string | undefined
  removeFromFavoritesCallback: (
    data: Record<string, unknown>,
    location: string | undefined
  ) => void
}

export const CardMini: React.FC<Props> = ({
  data,
  dataUrl,
  setToFavoritesCallback,
  isFavorite,
  removeFromFavoritesCallback,
  location,
}) => {
  const handleAddToFavorites = () => {
    if (!isFavorite) {
      setToFavoritesCallback(data)
    }
    if (isFavorite) {
      removeFromFavoritesCallback(data, location)
    }
  }

  return (
    <div className={s['card-holder']}>
      <button
        className={
          isFavorite
            ? `${s['favorite-button']} ${s['is-favorite']}`
            : s['favorite-button']
        }
        aria-label="favorite"
        onClick={handleAddToFavorites}
      />
      <Link to={dataUrl} className={s['card-inner']}>
        <img src={noImage} alt="Avatar" className={s['card-image']} />
        <p className={s['person-name']}>{data?.name || data?.title}</p>
      </Link>
    </div>
  )
}
