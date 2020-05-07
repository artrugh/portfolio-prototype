import React, { Fragment, useState, useEffect } from 'react';
import uuid from 'uuid';

import { data } from './../data';

//COMPONENTS
import Slider from '../components/Slider';

const Project = props => {

    // get the id from the match params
    const id = props.match.params.id
    useEffect(() => {
        document.title = `${id}`;
    }, [id]);

    // set the function in this Component to re render each time the slider changes
    // otherwise it is not posible to mesure the img lenght and heigth before it is rendered
    const [index, setIndex] = useState(0);
    const increace = (index, limit) => index < limit - 1 ? setIndex(prevIndex => prevIndex + 1) : null;
    const decreace = index => index > 0 ? setIndex(prevIndex => prevIndex - 1) : null;

    const project = data.projects.map(project => (
        project.id.toLowerCase() === id && (
            <Fragment
                key={uuid.v4()}>
                <div id="project-header">
                    {/* if there is logo, render logo */}
                    {project.logo.length > 1 ? <img className="project-logo" src={project.logo} alt={project.id} /> : null}
                    <div className="project-info">
                        <div className="titles">
                            {/* <h1 className="project-name">{project.id}</h1> */}
                            <a href={project.website}
                                key={uuid.v4()}
                                className="project-link"
                                rel="noopener noreferrer"
                                target="_blank">
                                <i className="fas fa-link"></i>
                                {project.website.length > 1 ? "WEBSITE" : "NOT AVAILABLE"}
                            </a>
                            <a href={project.repository}
                                key={uuid.v4()}
                                className="project-repo"
                                rel="noopener noreferrer"
                                target="_blank">
                                <i className="fab fa-git-alt"></i>
                                {project.repository.length > 1 ? "REPO" : "NOT AVAILABLE"}
                            </a>
                            <div className="state-indicator">{project.state}</div>
                        </div>
                        <div className="tools">
                            {project.tools.map(tool => tool.name === "webpack" ?
                                <div className={`tool ${tool.name}`} key={uuid.v4()}
                                    style={{ backgroundImage: tool.icon }}>
                                </div> :
                                <div className={`tool ${tool.name}`} key={uuid.v4()}
                                    style={{ background: tool.icon, backgroundSize: "100%" }}>
                                </div>
                            )}
                        </div>
                    </div>
                </div >
                < div id="project-body">
                    <p>{project.long_description}</p>
                    <Slider
                        // pass the slider's function as props
                        // as well as the data
                        index={index}
                        increace={increace}
                        decreace={decreace}
                        project={project} />
                </div>
            </Fragment >)
    ));
    return (
        <div className="container" id="project">
            {project}
        </div>
    )
}

export default Project;