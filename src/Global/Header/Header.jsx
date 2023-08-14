import React from 'react'
import './Header.css'
import {toggleMobMenu} from './Header.js'
import { Link } from 'react-router-dom';



const Header = () => {

  return (
    <header>
    <div className="menuOuterBox">
      
      <div class="logoWrap">
        <h2><Link to="/">#VANLIFE</Link></h2>
      </div>

      <div class="menuWrap">
        <nav>
          <ul>
            <li><Link to="">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/menu">Menu</Link></li>
          </ul>
        </nav> 
      </div>

      <span className="menuToggleOpen" onClick={toggleMobMenu}><i className="material-icons">menu</i></span>
 
    </div>
    </header>
  )
}

export default Header; 
