import React, {useState} from 'react'
import ProjectList from './ProjectList'
import HomeButton from '../navigation/HomeButton'

function VueProjects(props) {

    const {projects} = props;

    return (
        <div className="container">
            <HomeButton />
            
            <div className="row projects-header">
                <img className="header-projects" src="/img/workspace.png" alt=""/>
                <div className="col s12 react-header-title"><h2>Vue projecten</h2></div>
            </div>

            <div className="row page">
                <div className="col s12">
                    <p className="flow-text">
                        Vue is een zeer sterke library zolang je het simpel houdt. Het is ongelofelijk 
                        makkelijk en snel om in te werken, je voelt je bijna geen programmeur meer! 
                        Als de community groter en sterker wordt dan zie ik een prachtige toekomst voor Vue. 
                        Hieronder staan projecten waar ik aan gewerkt heb met VueJS. 
                    </p>
                </div>
            </div>
            
            <ProjectList projects={projects}/>
        </div>
    )
}

export default VueProjects
