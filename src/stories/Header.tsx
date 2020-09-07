import React from 'react'
// import logo from '../../assets/images/logo.png'
import s from './Header.module.scss'

export interface HeaderProps {
  logo: any
}

export const Header: React.FC<HeaderProps> = ({ logo }) => {
  return (
    <header className={s.header}>
      <nav>
        <img src={logo} alt="logo" className={s.logo} />
      </nav>
    </header>
  )
}
