import React from 'react'
import { Link } from 'react-router-dom'
import noImage from '../../assets/images/404.png'
import s from './CardMini.module.scss'

export const CardMini = ({ person, personUrl }: any) => (
  <div className={s['card-holder']}>
    <Link to={personUrl} className={s['card-inner']}>
      <img src={noImage} alt="Person Avatar" className={s['card-image']} />
      <p className={s['person-name']}>{person.name}</p>
    </Link>
  </div>
)
