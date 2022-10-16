import React from 'react'
import CartWidget from './CartWidget'
import './NavBar.css'

function NavBar() {

  return (
    <nav className='menu'>
      <div className="menu__logo"><img src="/assets/img/logo-secondary-black.webp" alt="logo" /></div>
      <div className="menu__lista">
        <ul>
          <li>acerca</li>
          <li>prductos</li>
          <li>contacto</li>
          <li><CartWidget/></li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar