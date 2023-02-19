/* eslint-disable max-len */
/* eslint-disable react/jsx-indent */
import classNames from 'classnames'
import { memo } from 'react'
import { NavLink } from 'react-router-dom'
import headerStyles from './header.module.css'

function Header() {
  console.log('Render Header')
  return (
    <header className={headerStyles.wr}>
      <nav>
        <ul className={headerStyles.headerMenu}>
          <li>
            <NavLink className={({ isActive }) => classNames({ [headerStyles.activLink]: isActive })} to="/">Home</NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => classNames({ [headerStyles.activLink]: isActive })} to="/contactsPage">Contacts</NavLink>
          </li>
          <li>
             {/* используем биьлиотеку classNames для создания условия подсветки ссылки (используем isActiv) */}
            <NavLink className={({ isActive }) => classNames({ [headerStyles.activLink]: isActive })} to="/todosPage">Todos</NavLink>
            {/* можно также через тернарный оператор className={({ isActive }) => isActive ? headerStyles.activLink : ''}  */}
          </li>
        </ul>
      </nav>
    </header>
  )
}

export const HeaderMemo = memo(Header)
