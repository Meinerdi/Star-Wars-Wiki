import React from 'react'
import s from './App.module.scss'
import Header from './components/Header/Header'
// import Sidebar from './components/Sidebar/Sidebar'
import { MainSidebar } from './stories/Sidebar.stories'

const menuPages = [
  'People',
  'Species',
  'Vehicles',
  'Starships',
  'Planets',
  'Films',
]

const App = () => {
  return (
    <div className={s['app-wrapper']}>
      <div className={s['sub-wrapper']}>
        <Header />
        <MainSidebar list={menuPages} navLink />
      </div>
    </div>
  )
}

export default App
