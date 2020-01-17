import React, { useState, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import uuid from 'uuid';

import { data } from '../data';

const Header = props => {

    const redirect = () => {
        props.history.push("/projects");
    };
    // manage the document.title pushing the project title
    const refresh = () => {
        if (window.location.href[window.location.href.length - 1]
            !== "/" && window.location.href.split("/").length === 5) {
            const title = window.location.href.split("/")[4];
            return title
        } else if (window.location.href[window.location.href.length - 1]
            === "/" && window.location.href.split("/").length === 5) {
            const title = "home"
            return title
        }
    }

    const [mouse, setMouse] = useState(false);
    const mouseOver = () => {
        setMouse(true)
    }
    const mouseOut = () => {
        setMouse(false)
    }

    // delete cross
    const image = `url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 100 100' style='enable-background:new 0 0 100 100;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E%3C/style%3E%3Cg id='XMLID_3_'%3E%3Cline id='XMLID_1_' class='st0' x1='0' y1='0' x2='100' y2='100' stroke= '%23FFFFFF' stroke-width = '2' stroke-miterlimit = '10'/%3E%3Cline id='XMLID_2_' class='st0' x1='100' y1='0' x2='0' y2='100' stroke= '%23FFFFFF' stroke-width = '2' stroke-miterlimit = '10'/%3E%3C/g%3E%3C/svg%3E")`;

    const list = data.header.map(item => (

        <Fragment key={uuid.v4()}>
            {item.id === "project" ? props.id === undefined ? null :

                <li
                    className={item.id}
                    onClick={redirect}
                    onMouseOut={mouseOut}
                    onMouseOver={mouseOver}
                    style={{
                        backgroundColor: '#1e1e1e'
                    }}
                >
                    <Link to={`/${props.id}`}
                        className={item.id}>
                        <i className="fas fa-align-left"></i>
                        {item.id === "project" ? props.id.toLowerCase() : item.id}
                        <div className="icon-remove"
                            style={{
                                backgroundImage: mouse ? image : ""
                            }}></div>
                    </Link>
                </li>
                :
                <li
                    className={item.id}
                    style={{
                        backgroundColor: refresh() === item.id ? '#1e1e1e' : ''
                    }}
                >
                    <Link to={item.id === "home" ? "/" : `/${item.id}`}
                        className={item.id}
                        style={{
                            color: refresh() === item.id ? '#ffffff' : '',
                            fontWeight: refresh() === item.id ? '300' : ''
                        }}>
                        {item.id === "project" ? props.id : item.id}
                    </Link>
                </li>
            }
        </Fragment>
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