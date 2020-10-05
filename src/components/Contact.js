import React, {useState, useEffect} from 'react'
import HomeButton from './navigation/HomeButton'

function Contact(props) {

    // useEffect(() => {
    //     let el= document.getElementById('fader')
  
    //         if (el) {
    //             el.style.opacity = '1'
    //         }
    // },[])

    const [obfuscation, setObfuscation] = useState({
        deel1: 'Patrick.',
        deel2: 'de.',
        deel3: 'Great',
        deel4: '@',
        deel5: 'Gmail',
        deel6: '.com'
    })

    return (
        <div className="container contact-container" >
            <HomeButton />

            <div className="row projects-header">
                <img className="header-projects" src="/img/contactbg.jpg" alt=""/>
            </div>

            <div className="row page">

                <div className="col s12">
                    <h1>Contact</h1>
                    <p className="flow-text">
                    Als je graag mijn CV ontvangt dan is mij mailen de kortste klap. Je kan ook met mij verbinden op linkedIn waar ik interessante artikelen deel en waarbij we elkaars werkstatus kunnen volgen. 
                    <br></br>
                    <br></br>
                    Máár als je gewoon graag met me wil zitten om over het web de games of techniek van morgen te praten dan doen we dat! Of we kunnen samen een leuk spel spelen? Alles is tegenwoordig mogelijk. Wederom, neem gerust contact op. 
                    </p>
                </div>

                <div className="row col s12 connect-list">
                        <ul>
                            <li><img src="/img/linkedin.svg" alt="LinkedIn adres icoon"/><span className="flow-text">linkedin.com/in/patrickdegreat/</span></li>
                            <li><img src="/img/mobile-phone.svg" alt="E-mailadres icoon"/><span className="flow-text">{obfuscation.deel1 + obfuscation.deel2 + obfuscation.deel3 + obfuscation.deel4 + obfuscation.deel5 + obfuscation.deel6}</span></li>
                            <li><img src="/img/email.svg" alt="Telefoonnummer icoon"/><span className="flow-text">06 - 22 95 75 01</span></li>                        
                        </ul>
                </div>                   
            </div>
        </div>
    )
}

export default Contact
