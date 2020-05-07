import React, { useLayoutEffect, useState } from 'react';

import Computer from './Computer';
import Movile from './Movile';

const Slider = ({ project, index, increace, decreace }) => {

    // get the dimension of the loaded img, to set which displayer it should be displayed in
    const [dimensions, setDimensions] = useState(undefined);
    const [template, setTemplate] = useState(undefined);

    useLayoutEffect(() => {
        if (dimensions) {
            dimensions.width > dimensions.height ? setTemplate("computer") : setTemplate("movile")
        }
    }, [dimensions, template]);

    return (
        <div className="img-container">
            {!template ?
                <img
                    onLoad={e => {
                        // when the image is already loaded set the dimensions
                        setDimensions({
                            width: e.target.offsetWidth,
                            height: e.target.offsetHeight,
                        });
                    }}
                    alt={project.id}
                    style={{ visibility: "hidden" }}
                    src={require(`./../assets/${project.img[index]}`)}
                />
                // decide which template should be displayed
                : template === "computer" ?
                    <Computer image={project.img[index]} />
                    : <Movile image={project.img[index]} />
            }
            <div
                className="left-cursor"
                onClick={() => increace(index, project.img.length)}
            ></div>
            <div
                className="right-cursor"
                onClick={() => decreace(index)}
            ></div>
        </div >
    )
}

export default Slider;