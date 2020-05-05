import React, {useState} from 'react'
import ProjectList from './ProjectList'
import HomeButton from '../navigation/HomeButton'

function ReactProjects(props) {
    const {projects} = props;

    return (
        <div className="container">
        <HomeButton />
            <div className="row projects-header">
                <img className="header-projects" src="/img/workspace.png" alt=""/>
                <div className="col s12 react-header-title"><h2>React projecten</h2></div>
            </div>

            <div className="row page">
                <div className="col s12">
                    <p className="flow-text">
                        Ik heb React opgepakt omdat er ontzettend veel mee mogelijk is. 
                        Het heeft een grote community en een ontwikkelaar die toekomstgericht blijft, 
                        Facebook. Hieronder staan projecten die ik d.m.v. React heb ontwikkeld. 
                    </p>
                </div>
            </div>
            
            <ProjectList projects={projects}/>
        </div>
    )
}

export default ReactProjects
