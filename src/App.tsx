import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import s from './App.module.scss'
import logo from './assets/images/logo.png'
import { RootState } from './redux/store'
import { Routes } from './routes/routes'
import { MainHeader } from './stories/Header.stories'
import { MainSidebar } from './stories/Sidebar.stories'
import { menuPages } from './utils/constants'
import { setFavoritesFromLocalStorage } from './redux/actions/actionsFavorites'

export const App = () => {
  const dispatch = useDispatch()
  const favorites = useSelector((state: RootState) => state.favoritesReducer)
  const allFavoritesIsNotEmpty = !Object.values(favorites).every(
    (arr: any) => !arr.length
  )

  useEffect(() => {
    if (allFavoritesIsNotEmpty) {
      window.localStorage.setItem('favorites', JSON.stringify(favorites))
    }
  }, [favorites])

  useEffect(() => {
    const localeStorageFavoritesData = JSON.parse(
      window.localStorage.getItem('favorites')!
    )
    dispatch(setFavoritesFromLocalStorage(localeStorageFavoritesData))
  }, [])

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
