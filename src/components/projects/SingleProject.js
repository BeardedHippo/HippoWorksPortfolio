import React, {useState, useEffect} from 'react'
import HomeButton from '../navigation/HomeButton'
import { Link } from 'react-router-dom';
import M from 'materialize-css/dist/js/materialize.min.js'

function SingleProject(props) {   

    let projectID = props.match.params.id;
    const [project, setProject] = useState({}); 
    
    useEffect(() => {
        var elems = document.querySelectorAll('.collapsible');
        M.Collapsible.init(elems, {
        inDuration: 250,
        outDuration: 250
        });

        var imgElem = document.querySelectorAll('.materialboxed');
        M.Materialbox.init(imgElem);

        setProject(props.project.find((project) => project.id === projectID));
    });



    function useForceUpdate() {
        let [value, setState] = useState(true);
        return () => setState(!value);
      }

    const handleNavigation = () => {
       let totalProjects = props.project.length.toString();
       let currentID = project.id;

       if (currentID === totalProjects) {
           return '1';
       } else if (currentID === '1') {
            return totalProjects
       } else {
           return Number(currentID) + 1
       }

    }
    
    return (
        <div className="container single-project">
        <HomeButton />
            <div className="row projects-header">
                <img onClick={useForceUpdate()} className="header-projects" src={"/img" + project.headingImg} alt=""/>
                <div className="col s12 react-header-title"><h2>{project.title}</h2></div>
            </div>
            
            <div className="row project-controls">
                <div className="col s4"><Link to={'/' + project.platform + '/projecten/' + handleNavigation()} className="waves-light btn">Vorig project</Link></div>
                <div className="col s4 two"><Link to={'/' + project.platform} className="waves-light btn">Overzicht</Link></div>
                <div className="col s4"><Link to={'/' + project.platform + '/projecten/' + handleNavigation()} className="waves-light btn">Volgend project</Link></div>
            </div>

            <div className="row content">
                <div className="col s12"><p className="flow-text">{project.description}</p></div>
                <a href={project.liveLink}  target="_blank" rel="noopener noreferrer" className="waves-effect waves-light btn"><i className="material-icons left">ondemand_video</i>Live Link</a>
                <ul className="collapsible col s12">
                    <li>
                        <div className="collapsible-header"><i className="material-icons">details</i><span>Toelichting van ontwikkelproces</span></div>
                        
                        <div className="collapsible-body">
                            <p className="flow-text">{project.description2}</p>
                            <p className="flow-text">{project.description3}</p>
                        </div>
                    </li>
                </ul>
                
                <div className="col s12"></div>
                <div className="col s12 gallery">
                    {project.images && project.images.map(image => {
                        return <div className="col s6" key={"/img/" + image}><img className="materialboxed" src={"/img" + image} alt="Afbeeldinggallerij item"></img></div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default SingleProject
