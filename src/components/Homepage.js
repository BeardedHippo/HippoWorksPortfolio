import React, {useState} from 'react'
import { Link } from 'react-router-dom';

function Homepage(props) {

    const handleScroll = () => {
        let targetEl = document.getElementsByClassName('content-container')[0].offsetTop;
        let scrollPosition = window.scrollY;
        let newPosition = window.scrollY;
        let elThreshold = targetEl - ( (targetEl - scrollPosition) / 2);

        let counter = 0;
        
        let timer = setInterval(scrollTimer, 1);

        function scrollTimer() {
            if (newPosition >= elThreshold ) {
                counter -= 0.1
                
                if (counter <= 0.4) {
                     counter = 0.4
                }
                
            } else {
                counter += 0.1
            }

            newPosition += counter;
            window.scrollTo(0, newPosition);

            
            if (newPosition >= targetEl) {
                clearTimeout(timer)
            }
            
        }


    }

    return (
        <div className="container homepage">
            <div className="row frontpage">
                   <Link to="/"> <img className="web-logo" src="/img/logo_hippoworks_notext.png" alt="Een ontschuldig hoofd van een paarse nijlpaard met een oranje baard. Dit is het logo van HippoWorks."/></Link>
                    
                    <div className="col s12 frontpage-content">
                        <div className="col s12 web-title"><h1><span>Hippo</span>Works</h1></div>
                        <div className="divider"></div>
                        <div className="col s12 payoff"><span>Iemand noemde mij een Hippo, <br></br> het...bleef hangen..</span></div>
                        <div className="down-button" onClick={handleScroll}><img src="/img/arrow_down.png" alt="Een pijl dat naar beneden wijst. Het wijst naar nieuwe content."/></div>
                    </div>
            </div>

            <div className="container content-container">
                <div className="header"></div>
                <div className="row bio timeline-content">
                    <div className="col s12">
                        <h2>New phone, who this?</h2>
                        <p className="flow-text" lang="nl"> 
                            Mijn naam is Patrick de Groot, 26 jaar. 
                            Ik ben een sympathieke, energieke en leergierige front-end ontwikkelaar in opleiding. 
                            Javascript is hierin mijn passie. 
                            <br></br>
                            <br></br>
                            Naast programmeren heb ik een passie voor het 
                            conceptproces (waarbij Edward de Bono mijn held is), communicatie, project management en 
                            organisatie. Denk maar aan contact met klanten, product presentatie 
                            en producten strategisch positioneren.
                        </p>
                    </div>
                </div>

                <div className="row timeline">
                    <div className="row timeline timeline-heading"><
                        img src="/img/media_icon.png" alt="Icoon die het thema 'Mediavormgeving' geeft."/>
                        <h3>MBO4 Interactieve Mediavormgeving</h3>
                    </div>
                    <div className="row timeline timeline-content">
                        <div className="col s12">
                            <p className="flow-text">
                                Na MBO4 kreeg ik een spontane passie voor corporate communicatie.  
                            </p>
                        </div>
                        
                        <div className="col s12">
                            <div className="timeline-arrow"></div>
                        </div>
                    </div>
                    <div className="row timeline timeline-heading">
                        <img src="/img/corporate_icon.png" alt="Icoon die het thema 'Corporate Communicatie' geeft."/>
                        <h3>HBO Communicatie</h3>
                    </div>
                    <div className="row timeline timeline-content">
                        <div className="col s12">
                            <p className="flow-text">
                                Tijdens stage, bij de communicatie afdeling van Zorggroep Alliade, 
                                merkte ik dat dit niet de plek was voor mijn creatieve geest. 
                                Ik wilde designoplossingen bedenken. Daarbij miste ik webontwikkeling.  
                            </p>
                        </div>

                        <div className="col s12">
                            <div className="timeline-arrow"></div>
                        </div>
                    </div>
                    <div className="row timeline timeline-heading">
                        <img src="/img/study_icon.png" alt="Icoon die het thema 'Communication Multimedia Design' geeft."/>
                        <h3>HBO Communication Multimedia Design</h3>
                    </div>
                    <div className="row timeline timeline-content">
                        <div className="col s12">
                            <p className="flow-text">
                                Momenteel streef ik ernaar om mijzelf tot een volwaardige front-end webontwikkelaar op te leiden. 
                                Concepontwikkeling en presenteren zijn bijtaken die ik mijzelf ook goed zie oppakken.  
                                Graag leer ik ook een hoop over team coaching en management
                            </p>
                        </div>

                        <div className="col s12">
                            <div className="timeline-arrow"></div>
                        </div>
                    </div>
                </div>

                <div className="row footer">
                    <div className="row footer-nav">
                        <div data-target="mobile-demo" className="col s8 sidenav-trigger"><span>Portfolio</span></div>
                        <div data-target="mobile-demo" className="col s8 sidenav-trigger"><span>Contact</span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage
