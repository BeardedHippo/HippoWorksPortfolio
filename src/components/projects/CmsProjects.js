import React from 'react'
import HomeButton from '../navigation/HomeButton'

function CmsProjects() {
    return (
        <div className="container">
        <HomeButton />
            
            <div className="row projects-header">
                <img className="header-projects" src="/img/workspace.png" alt=""/>
                <div className="col s12 react-header-title"><h2>CMS projecten</h2></div>
            </div>

            <div className="row page">
                <div className="col s12">
                    <p className="flow-text">
                        Er zijn momenteel geen concrete projecten dat ik kan laten zien. 
                        Wel kan ik vertellen dat ik in het verleden gewerkt heb met: 
                    </p>

                    <ul className='flow-text'>
                        <li>Het bouwen van mijn eigen CMS</li>
                        <li>PHPBB forums</li>
                        <li>WordPress</li>
                        <li>Magento</li>
                        <li>PHPmyAdmin&MySQL</li>
                        <li>Kleine eigen php scripts</li>
                    </ul>

                    <p className="flow-text">
                        Zou ik gevraagd krijgen hoe dit allemaal moet werken, ik zou het
                        niet kunnen uitleggen. Maar als ik het voor mij zie en ermee werk
                        dan komt er genoeg terug. Ik ben eens aan Laravel geintroduceerd en 
                        ik pakte dit dankzei mijn voorkennis al gemakkelijk op.
                    </p>
                    
                </div>
            </div>
        </div>
    )
}

export default CmsProjects
