import React from 'react'
import { Link } from 'react-router-dom'
import noImage from '../../assets/images/404.png'
import s from './CardMini.module.scss'

export const CardMini = ({ data, dataUrl, setToFavoritesCallback }: any) => {
  const handleAddToFavorites = () => {
    setToFavoritesCallback(data)
  }

  return (
    <div className={s['card-holder']}>
      <button
        className={s['favorite-button']}
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
