import React from 'react'
import logo from '../../assets/images/logo.png'
import s from './Header.module.scss'

const Header = () => {
  return (
    <header className={s.header}>
      <nav>
        <img src={logo} alt="logo" className={s.logo} />
      </nav>
    </header>
  )
}

export default Header
