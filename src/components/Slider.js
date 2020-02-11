import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Slider = props => {

    return (
        <div className="img-container">
            <svg
                onClick={e => props.slider(e, props.project.img.length)}
                className="arrow-slider left"
                x="0px" y="0px" viewBox="0 0 100 100"
                style={{
                    width: props.index > 0 ? "50px" : null,
                    maxWidth: props.index > 0 ? "30px" : "0px",
                    paddingLeft: props.index > 0 ? "15px" : "0px"
                }}>
                <polyline className="st0" points="50.5,6.3 7,49.5 50.5,93 " />
            </svg>
            <Link to="/projects">
                <img
                    src={require(`./../assets/${props.project.img[props.index]}`)}
                    className="img-slider"
                    alt="project"
                    onMouseOver={e => e.target.style.cursor = "url('https://img.icons8.com/ios/50/ffffff/delete-sign.png'), auto"}
                />
            </Link>
            <svg
                onClick={e => props.slider(e, props.project.img.length)}
                // ref={arrowRight}
                className="arrow-slider right"
                x="0px" y="0px" viewBox="0 0 100 100"
                style={{
                    width: props.index < props.project.img.length - 1 ? "50px" : null,
                    maxWidth: props.index < props.project.img.length - 1 ? "30px" : "0px",
                    paddingLeft: props.index < props.project.img.length - 1 ? "15px" : "0px"
                }}>
                <polyline className="st0" points="50.5,6.3 7,49.5 50.5,93 " />
            </svg>
        </div>
    )
}

export default Slider;