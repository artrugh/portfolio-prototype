import React, { useState, createRef, useEffect } from 'react';
import { NavLink, Link, withRouter } from 'react-router-dom';
import uuid from 'uuid';

import { data } from '../data';

const Header = props => {

    const [mouse, setMouse] = useState(false);
    const mouseOver = () => {
        setMouse(true)
    }
    const mouseOut = () => {
        setMouse(false)
    }

    // create a ref of the proj item
    const projectRef = createRef();
    // set the backgroundColor in false
    const [itemBackgroundColor, setBackgroundColor] = useState(false) ;

    // didunmount check if there is a project open
    useEffect(() => {
        setBackgroundColor(projectRef.current != null);
    });

    // delete cross
    const image = `url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 100 100' style='enable-background:new 0 0 100 100;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E%3C/style%3E%3Cg id='XMLID_3_'%3E%3Cline id='XMLID_1_' class='st0' x1='0' y1='0' x2='100' y2='100' stroke= '%23FFFFFF' stroke-width = '7' stroke-miterlimit = '10'/%3E%3Cline id='XMLID_2_' class='st0' x1='100' y1='0' x2='0' y2='100' stroke= '%23FFFFFF' stroke-width = '7' stroke-miterlimit = '10'/%3E%3C/g%3E%3C/svg%3E")`;
   
    const list = data.header.map(li => (
        li === "project" ? props.id === undefined ? null :
            <NavLink key={uuid.v4()}
                ref={projectRef}
                to={`/projects`}
                onMouseOut={mouseOut}
                onMouseOver={mouseOver}
                className={li}>
                <i className="fas fa-align-left"></i>
                {li === "project" ? props.id.toLowerCase() : li}
                <div className="icon-remove"
                    style={{
                        backgroundImage: mouse ? image : ""
                    }}></div>
            </NavLink>
            :
            <NavLink key={uuid.v4()}
                to={`/${li}`}
                className={li}
                style = {{
                    // if there is a project set the backcolor grey otherwise nothing
                    backgroundColor: itemBackgroundColor ? "#2d2d2d" : null
                }}
                >
                {li}
            </NavLink>
    ));
    return (
        <div id="header">
            <ul>
                {list}
            </ul>
        </div >
    )
};

export default withRouter(Header);