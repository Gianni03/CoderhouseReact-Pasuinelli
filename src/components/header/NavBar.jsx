import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'
import './NavBar.css'

function NavBar() {

  return (
    <nav className='menu'>
      <Link to="/">
      <div className="menu__logo"><img src="/assets/img/logo-secondary-black.webp" alt="logo" /></div>
      </Link>
      <div className="menu__lista">
        <ul>
          <li><Link to={"/category/Jazz III"}>Jazz III</Link></li>
          <li><Link to={"/category/Tortex"}>Tortex</Link></li>
          <li><Link to={"/category/Ultex"}>Ultex</Link></li>
          <li><Link to={"/category/Flow"}>Flow</Link></li>
          <li><Link to={"/cart"}><CartWidget/></Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar