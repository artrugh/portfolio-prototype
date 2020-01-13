import React, { Fragment, useState, useEffect } from 'react';
import uuid from 'uuid';

import { data } from './../data';

//COMPONENTS
import Header from '../components/Header';
import Slider from '../components/Slider';

const Project = props => {

    useEffect(() => {
        document.title = `${id}`;
    });

    const id = props.match.params.id
    const [index, setIndex] = useState(0);

    // slider handle
    const slider = (e, max) => {
        if (e.target.className.baseVal === "arrow-slider right" || e.target.className.baseVal === "st0") {
            increace(index, max);
        } else if (e.target.className.baseVal === "arrow-slider left" || e.target.className.baseVal === "st0") {
            decreace(index);
        }
    }

    const increace = (index, limit) => index < limit - 1 ? setIndex(prevIndex => prevIndex + 1) : null;
    const decreace = index => index > 0 ? setIndex(prevIndex => prevIndex - 1) : null;

    const project = data.projects.map(project => (
        project.id.toLowerCase() === id ?
            <Fragment key={uuid.v4()}>
                <div id="project-header">
                    {/* if there is logo, render logo */}
                    {project.logo.length > 1 ? <img className="project-logo" src={project.logo} alt={project.id} /> : null}
                    <div className="project-info">
                        <div className="titles">
                            <h1 className="project-name">{project.id}</h1>
                            <a href={project.web_site}
                                key={uuid.v4()}
                                className="project-link"
                                rel="noopener noreferrer"
                                target="_blank">
                                <i className="fas fa-link"></i>
                                {project.web_site.length > 1 ? "WEB-SITE" : "NOT AVAILABLE"}
                            </a>
                            <a href={project.repository}
                                key={uuid.v4()}
                                className="project-repo"
                                rel="noopener noreferrer"
                                target="_blank">
                                <i className="fab fa-github-square"></i>
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
                        index={index}
                        slider={slider}
                        project={project}
                    />
                </div>
            </Fragment > : null
    ));
    return (
        <div className="container">
            <Header id={id} />
            <div className="container" id="project">
                {project}
            </div>
        </div>
    )
}

export default Project;