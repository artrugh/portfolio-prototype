import React, { useState, useEffect, createRef } from 'react';
import { Link } from 'react-router-dom';
import uuid from 'uuid';

import { data } from './../data';

const Projects = props => {

    const setSection = props.data

    const container = createRef();
    const [opacity, setOpacity] = useState(false);

    // after the container is mounted check the opacity of the arrow
    useEffect(() => {
        document.title = "Projects";
        if (container.current.clientHeight < window.innerHeight) setOpacity(true);
    }, [container]);

    // const requireImage = source => require(`./../assets/${source}`)

    const projects = data.projects.map(project => (
        <Link
            onClick={() => setSection(project.id)}
            key={uuid.v4()}
            to={`/projects/${project.id.toLowerCase()}`}
            className={`${project.id.toLowerCase()} button`}>

            <figure
                key={uuid.v4()}
                id={project.id}>
                {/* <img
                    key={uuid.v4()}
                    className="project-main-image"
                    src={requireImage(project.img[0])}
                    alt="project" /> */}

                <div
                    key={uuid.v4()}
                    className="project-main-image"
                    style={{ backgroundImage: `url(${require(`./../assets/${project.img[0]}`)})` }} >

                </div>

                <figcaption>
                    <p key={uuid.v4()}><span>name: </span>"{project.id}"</p>,<br />
                    <p key={uuid.v4()}><span>description: </span>"{project.short_description}"</p>
                </figcaption>
                <div
                    key={uuid.v4()}
                    className="button-project">SEE MORE</div>
            </figure>
        </Link >
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