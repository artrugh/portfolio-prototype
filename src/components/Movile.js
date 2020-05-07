import React from 'react'

export default function Movile({ image }) {
    return (
        <div
            className="movil device" >
            <div className="buttom-top"></div>
            <div className="logo"></div>
            <div
                className="screen"
                style={{ backgroundImage: `url(${require(`./../assets/${image}`)})` }} >
            </div>
            <div className="buttom-bottom">
            </div>
        </div>
    )
}
