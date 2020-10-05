import React from 'react'
import {Router, NavLink} from 'react-router-dom'

function NavBarTop() {
    return (
        <div className="top-bar">
            <ul>
                <NavLink exact to='/'><li>Homepagina</li></NavLink>
                <NavLink to='/react'><li>React projecten</li></NavLink>
                <NavLink to='/vue'><li>Vue projecten</li></NavLink>
                <NavLink to='/overig'><li>Overige projecten</li></NavLink>
                <NavLink to='/contact'><li>Contact</li></NavLink>
            </ul>  
        </div>
    )
}

export default NavBarTop