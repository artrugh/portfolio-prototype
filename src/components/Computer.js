import React from 'react'

export default function Computer({ image }) {

    return (
        <div
            className="computer-container devise">
            <div className="computer">
                <div className="buttom-top"></div>
                {/* <img
                    className="screen"
                    src={require(`./../assets/${imageName}`)}
                /> */}
                <div
                    className="screen"
                    style={{ backgroundImage: `url(${require(`./../assets/${image}`)})` }} >
                </div>
            </div>
            <div className="stand-computer"></div>
            <div className="footer-computer"></div>
        </div>
    )
}
