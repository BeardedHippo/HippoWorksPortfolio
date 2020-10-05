import React, {useEffect} from 'react'
import ProjectList from './ProjectList'
import HomeButton from '../navigation/HomeButton'

function OverigProjects(props) {
    const {projects} = props;
    console.log(props)

    // useEffect(() => {
    //     let el= document.getElementById('fader')
  
    //         if (el) {
    //             el.style.opacity = '1'
    //         }
    // },[])


    return (
        <div className="container">
            <HomeButton />
        
            <div className="row projects-header">
                <img className="header-projects" src="/img/workspace.png" alt=""/>
                <div className="col s12 react-header-title"><h2>Overige projecten</h2></div>
            </div>
            
            <div className="row page">
                <div className="col s12">
                    <p className="flow-text">
                    Onder overige projecten laat ik projecten zien dat niet in React, angular, vue of vergelijkbare frameworks/libraries zijn ontwikkeld. Hier komen Laravel projecten, Wordpress projecten, Magento projecten, PHP scripts, Node projecten etc. meer aan bod.
                    </p>
                </div>
            </div>
            
            <ProjectList projects={projects}/>
        </div>
    )
}

export default OverigProjects
