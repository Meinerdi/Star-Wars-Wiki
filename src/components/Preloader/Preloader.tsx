import React from 'react'
import preloaderImage from '../../assets/images/preloader.gif'
import s from './Preloader.module.scss'

export const Preloader = () => (
  <div className={s['preloader-wrapper']}>
    <img src={preloaderImage} alt="Preloader" />
  </div>
)
