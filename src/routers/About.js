import React, { useEffect } from 'react';
import uuid from 'uuid';

import useWindowDimensions from './../custHooks/useWindowDimensions';

import LateralBar from './../components/LateralBar'
import { data } from './../data'

const About = () => {

    useEffect(() => {
        document.title = "About";
    }, []);

    const { height, width } = useWindowDimensions();

    const Bar = (porcent) => {

        let a = width / 7
        let b = a * `0.${porcent}`
        let array = []

        for (let i = 0; i < b; i++) {
            array.push("/");
        }
        array = array.join('')
        return array
    }

    const skills = data.skills.map(leng => (
        <div id={leng.name}
            className="bar"
            key={uuid.v4()}>
            <div className="first">
                <p>{leng.name}</p>
                <span className={leng.name}>{Bar(leng.porc)}</span>
                <span className="white">{Bar(100 - leng.porc)}</span>
            </div>
            <div className="second">
                <span className={leng.name}>{Bar(leng.porc)}</span>
                <span className="white">{Bar(100 - leng.porc)}</span>
                {/* show the porcent number */}
                <span className={leng.name}>{`${leng.porc}%`}</span>
            </div>
        </div>
    ))

    return (
        <div className="container" id="about">
            <LateralBar screen={height} />
            <div className="content">
                <h2>DEV-SKILLS</h2>
                {skills}
            </div>
        </div>
    )
}

export default About;