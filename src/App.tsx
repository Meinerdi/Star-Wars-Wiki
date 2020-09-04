import React from 'react'
import s from './App.module.scss'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'

const App = () => {
  return (
    <div className={s["app-wrapper"]}>
      <div className={s['sub-wrapper']}>
        <Header />
        <Sidebar />
      </div>
    </div>
  )
}

export default App
