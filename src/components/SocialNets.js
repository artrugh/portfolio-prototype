import React from 'react';
import { Link } from 'react-router-dom';
import uuid from 'uuid';

import Logo from './Logo';

import { data } from './../data';

const SocialNets = () => {
    const links = data.social_nets.map(item => (
        item.id === "logo" ?
            <Link to={item.path}
                key={uuid.v4()}>
               <Logo/>   
            </Link>
            : <a href={item.path}
                key={uuid.v4()}
                className={item.id}
                rel="noopener noreferrer"
                target="_blank">   
                <i className={item.icon} />    
            </a>
    ));
    return (
        <div id="social-net">
            {links}
        </div>
    )
};

export default SocialNets;
