import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Sidebar.module.scss'

const menuPages = [
  'People',
  'Species',
  'Vehicles',
  'Starships',
  'Planets',
  'Films',
]

const Sidebar = () => {
  return (
    <aside className={s.sidebar}>
      <nav className={s.navigation}>
        <ul>
          {menuPages.map((page) => (
            <li key={page} className={s['menu-item']}>
              <NavLink
                to={`/${page.toLowerCase()}`}
                className={s['menu-link']}
                activeClassName={s.active}
              >
                {page}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
