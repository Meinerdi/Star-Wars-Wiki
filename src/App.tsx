import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import s from './App.module.scss'
import logo from './assets/images/logo.png'
import { RootState } from './redux/store'
import { Routes } from './routes/routes'
import { MainHeader } from './stories/Header.stories'
import { MainSidebar } from './stories/Sidebar.stories'
import { menuPages } from './utils/constants'

export const App = () => {
  const favorites = useSelector((state: RootState) => state.favoritesReducer)

  useEffect(() => {
    window.localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])

  return (
    <div className={s['app-wrapper']}>
      <div className={s['sub-wrapper']}>
        <MainHeader logo={logo} />
        <div className={s['content-wrapper']}>
          <MainSidebar list={menuPages} navLink />
          <div className={s.pages}>
            <Routes />
          </div>
        </div>
      </div>
    </div>
  )
}
