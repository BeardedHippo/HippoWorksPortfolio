import React from 'react'
import {Link} from 'react-router-dom'

function HomeButton() {
    return (
        <Link to='/'><div className="home-button"></div></Link>
    )
}

export default HomeButton
