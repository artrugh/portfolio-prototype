import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import uuid from 'uuid';

import { data } from './../data';

const Projects = () => {

    const container = React.createRef();
    const [opacity, setOpacity] = useState(false);

    // after the container is mounted check the opacity of the arrow
    useEffect(() => {
        document.title = "Projects";
        if (container.current.clientHeight < window.innerHeight) setOpacity(true);
    }, [container]);

    const requireImage = source => require(`./../assets/${source}`)

    const projects = data.projects.map(project => (

        <figure key={uuid.v4()} id={project.id}>
            <Link
                to={`/projects/${project.id.toLowerCase()}`}
                className={project.id.toLowerCase()}>
                <img
                    className="project-main-image"
                    src={requireImage(project.img[0])}
                    alt="project" />
            </Link>
            <figcaption>
                <h2>{project.id}</h2>
                <p>{project.short_description}</p>
            </figcaption>
            <Link
                className="button-project"
                to={`/projects/${project.id.toLowerCase()}`}>
                SEE MORE</Link>
        </figure>
    ));
    return (
        <div
            id="projects"
            className="container"
            ref={container}>
            {projects}
            <svg
                style={{ opacity: opacity ? 0 : 1 }}
                id="arrow-scroll"
                x="0px"
                y="0px"
                viewBox="0 0 100 100">
                <polyline id="XMLID_8_"
                    className="st0"
                    points="50.5,6.3 7,49.5 50.5,93 " />
            </svg>
        </div >
    )
}

export default Projects;