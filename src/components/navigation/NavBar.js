import React, { useState } from 'react'
import {Link} from 'react-router-dom'

function NavBar() {
    return (
        <div className="container">
            <a data-target="mobile-demo" className="sidenav-trigger">
            <img src="/img/menu_icon.png" alt="Navigatie icoon."/></a>
            
            <nav className="sidenav" id="mobile-demo">
                <div className="container">

                <Link to="/"> <img className="nav-logo exit-trigger" src="/img/hippoworks_badge.png" alt="Een ontschuldig hoofd van een paarse nijlpaard met een oranje baard. Dit is het logo van HippoWorks."/></Link>
                    <div className="row col s12"><hr className='left-line'></hr>Portfolio<hr className='right-line'></hr></div>
                    
                    <ul className='nav'>
                        <Link to='/react'><li className='exit-trigger'>React projecten</li></Link>
                        <Link to='/vue'><li className='exit-trigger'>Vue projecten</li></Link>
                        <Link to='/cms'><li className='exit-trigger'>CMS projecten</li></Link>
                    </ul>  
                    <div className="row col s12 connect-list">
                        <ul>
                            <li><img src="/img/connect_linkedin_icon.png" alt="LinkedIn adres icoon"/>linkedin.com/</li>
                            <li><img src="/img/connect_mail_icon.png" alt="E-mailadres icoon"/>Email</li>
                            <li><img src="/img/connect_phone_icon.png" alt="Telefoonnummer icoon"/>Tel. number<img className="exitsign sidenav-close" src="/img/exitsign.png" alt="Een afsluitknop voor de navigatie"/></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
