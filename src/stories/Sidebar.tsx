import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Sidebar.module.scss'

export interface SidebarProps {
  list: string[]
  navLink: boolean
}

export const Sidebar: React.FC<SidebarProps> = ({
  list = ['First item', 'Second item', 'Third item'],
  navLink = false,
}) => {
  return (
    <aside className={s.sidebar}>
      <nav className={s.navigation}>
        <ul className={s['menu-list']}>
          {list.map((page) => (
            <li key={page} className={s['menu-item']}>
              {navLink ? (
                <NavLink
                  to={`/${page.toLowerCase()}`}
                  className={s['menu-link']}
                  activeClassName={s.active}
                >
                  {page}
                </NavLink>
              ) : (
                <a href={`/${page.toLowerCase()}`} className={s['menu-link']}>
                  {page}
                </a>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
