import React from 'react'
import {Link} from 'react-router-dom'

function ProjectList(props) {

    const { projects } = props;
    
    return (
        <div className="row col s12 project-list">
            { projects && projects.map(project => {
                return (
                    <div className="container section project-details" key={project.id}>
                        <div className="card -z-depth-0">
                            <div className="card-content">
                                <Link to={'/' + project.platform + '/projecten/' + project.id}>
                                    <div className="card-img">
                                        <img src={'/img' + project.images[0]} alt=""/>
                                    </div>
                                    <span className="card-title"><h3>{project.title}</h3></span>
                                </Link>
                                <Link to={'/' + project.platform + '/projecten/' + project.id}><p className="card-summary-smallscreen">{project.summarySmall} </p></Link> 
                                <p className="card-summary-midscreen">{project.summaryMid} <Link to={'/' + project.platform + '/projecten/' + project.id}><span>Lees verder -></span></Link></p>
                                <p className="card-summary-bigscreen">{project.summaryBig} <Link to={'/' + project.platform + '/projecten/' + project.id}><span>Lees verder -></span></Link></p>
                                <p className="card-summary-fullscreen">{project.description} <Link to={'/' + project.platform + '/projecten/' + project.id}><span>Lees verder -></span></Link></p>  
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ProjectList
