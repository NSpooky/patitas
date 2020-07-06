import React from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'

const Header = () => (
  <div className="Header">
    <div className="Header-container">
      <div className="Header-content">
        <div className="Header-logo">
          <Link to="/">
            <img src={"https://image.flaticon.com/icons/png/512/21/21545.png"} alt="Patitas"/>
          </Link>
          <h1>Patitas</h1>
        </div>
        <div className="Header-nav">
          <Nav/>
        </div>
      </div>
    </div>
  </div>
)

export default Header