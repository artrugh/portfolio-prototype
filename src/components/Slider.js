import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Slider = props => {

    const [height, setHeight] = useState(0);
    const arrowLeft = React.createRef();
    const arrowRight = React.createRef();

    // manage the position of the arrow acording to the height of the container
    useEffect(() => {
        let arrowMiddleHeight = arrowRight.current.clientHeight / 2;
        arrowRight.current.style.top = `${height - arrowMiddleHeight}px`;
        arrowLeft.current.style.top = `${height - arrowMiddleHeight}px`;
    });

    return (
        <div
            // set the height hook when the container after the container is load
            onLoad={e => setHeight(e.target.getBoundingClientRect().height / 2)}
            className="img-container"
            style={{ position: "relative" }}
        >
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
                ref={arrowLeft}
                className="arrow-slider left"
                x="0px" y="0px" viewBox="0 0 100 100" style={{ enableBackground: "new 0 0 100 100" }}>
                <polyline className="st0" points="50.5,6.3 7,49.5 50.5,93 "
                    style={{
                        opacity: props.index > 0 && height > 0 ? "1" : "0"
                    }} />
            </svg>
            <svg
                onClick={e => props.slider(e, props.project.img.length)}
                ref={arrowRight}
                className="arrow-slider right"
                x="0px" y="0px" viewBox="0 0 100 100" style={{ enableBackground: "new 0 0 100 100" }}>
                <polyline className="st0" points="50.5,6.3 7,49.5 50.5,93 "
                    style={{ opacity: props.index < props.project.img.length - 1 && height > 0 ? "1" : "0" }}
                />
            </svg>
        </div>
    )
}

export default Slider;