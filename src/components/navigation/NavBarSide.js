import React, { useState } from 'react'
import {Link} from 'react-router-dom'

function NavBar() {

    const [obfuscation, setObfuscation] = useState({
        deel1: 'Patrick.',
        deel2: 'de.',
        deel3: 'Great',
        deel4: '@',
        deel5: 'Gmail',
        deel6: '.com'
    })

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
                        <Link to='/overig'><li className='exit-trigger'>Overige projecten</li></Link>
                    </ul>  
                    <div className="row col s12 connect-list">
                        <ul>
                            <li><img src="/img/connect_linkedin_icon.png" alt="LinkedIn adres icoon"/>linkedin.com/in/patrickdegreat/</li>
                            <li><img src="/img/connect_mail_icon.png" alt="E-mailadres icoon"/>{obfuscation.deel1 + obfuscation.deel2 + obfuscation.deel3 + obfuscation.deel4 + obfuscation.deel5 + obfuscation.deel6}</li>
                            <li><img src="/img/connect_phone_icon.png" alt="Telefoonnummer icoon"/>06 - 22 95 75 01<img className="exitsign sidenav-close" src="/img/exitsign.png" alt="Een afsluitknop voor de navigatie"/></li>                        
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
