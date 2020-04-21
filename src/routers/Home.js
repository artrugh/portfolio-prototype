import React, { useEffect } from 'react';

// Components
import Type from './../custHooks/type'
import LateralBar from './../components/LateralBar'

import useWindowDimensions from './../custHooks/useWindowDimensions';

const Home = () => {
    
    useEffect(() => {
        document.title = "AR Web Developer";
    }, []);

    const { height } = useWindowDimensions();

    return (
        <div className="container" id = "home">
             <LateralBar screen={height} />
            <div className="section title">
                <section>
                    <p>#arturo-rugh </p>
                    <p>{"{"}</p><br></br>
                    <p>return </p>
                    <p>full-stack</p>
                    <p>(</p>
                    <p>$developer</p>
                    <p>);</p> <br></br>
                    <p>};</p>
                </section>
            </div>
            <div className="section statement">
                <span className="main">main</span>
                <section>
                    <Type 
                    string = "transforming your ideas into images and the images to code!"
                    min = {50}
                    max = {100}
                    deleteSign = {false}
                    class = "typed"
                    id = "slogan"
                    />
                </section>
                <span className="main" >main</span>
            </div>
        </div>
    )
}

export default Home;