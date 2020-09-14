import React from 'react'
import { useSelector } from 'react-redux'
import s from './Favorites.module.scss'
import { CardMini } from '../../components/CardMini/CardMini'

export const Favorites = () => {
  const favorites = useSelector((state: any) => state.favoritesReducer)

  return (
    <div className={s['favorites-wrrapper']}>
      <div className={s['people-holder']}>
        <p>Favorite People</p>
        {favorites.people.map((i: any) => {
          const cardUrl = i.url.split('/').slice(-3, -1).join('/')
          return (
            <CardMini data={i} key={i.name} dataUrl={`/${cardUrl}/films`} />
          )
        })}
      </div>
      <div className={s['species-holder']}>
        <p>Favorite Species</p>
        {favorites.species.map((i: any) => {
          const cardUrl = i.url.split('/').slice(-3, -1).join('/')
          return (
            <CardMini data={i} key={i.name} dataUrl={`/${cardUrl}/films`} />
          )
        })}
      </div>
      <div className={s['vehicles-holder']}>
        <p>Favorite Vehicles</p>
        {favorites.vehicles.map((i: any) => {
          const cardUrl = i.url.split('/').slice(-3, -1).join('/')
          return (
            <CardMini data={i} key={i.name} dataUrl={`/${cardUrl}/films`} />
          )
        })}
      </div>
      <div className={s['starships-holder']}>
        <p>Favorite Starships</p>
        {favorites.starships.map((i: any) => {
          const cardUrl = i.url.split('/').slice(-3, -1).join('/')
          return (
            <CardMini data={i} key={i.name} dataUrl={`/${cardUrl}/films`} />
          )
        })}
      </div>
      <div className={s['planets-holder']}>
        <p>Favorite Planets</p>
        {favorites.planets.map((i: any) => {
          const cardUrl = i.url.split('/').slice(-3, -1).join('/')
          return (
            <CardMini data={i} key={i.name} dataUrl={`/${cardUrl}/films`} />
          )
        })}
      </div>
      <div className={s['films-holder']}>
        <p>Favorite Films</p>
        {favorites.films.map((i: any) => {
          const cardUrl = i.url.split('/').slice(-3, -1).join('/')
          return (
            <CardMini data={i} key={i.name} dataUrl={`/${cardUrl}/people`} />
          )
        })}
      </div>
    </div>
  )
}
