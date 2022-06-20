import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css"

export const Navbar = () => {
    
  
  return (
    <div className='nav'>
      <Link to="/alluser"><h3>ALL USERS</h3></Link>
      <Link to="/product"><h3>PRODUCT</h3></Link>
      <input type="text" placeholder='search' />
    </div>
  )
}
