import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./Header.css"
const Header = () => {
    return (
        <div className='header'>
            <div className='container'>
            <div className='logo'>
            <Link to='/'>Movies</Link>
            </div>
            <ul className='nav-links'>
            <li><NavLink to='/'>Watch List</NavLink></li>
            <li><NavLink to='/watched'>Watched</NavLink></li>
            <li><NavLink to='/add' className='btn'>Add</NavLink></li>
            </ul>
            </div>
        </div>
    )
}

export default Header
