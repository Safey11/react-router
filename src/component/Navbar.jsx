import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav className='nav'>
    <Link to={'/'}><li>HOME</li></Link>
    <Link to={"/About"}><li>About</li></Link>
    <Link to={"/Login"}><li>Login</li></Link>

    </nav>

    </>
  )
}

export default Navbar