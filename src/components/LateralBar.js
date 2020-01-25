import React from 'react';
import uuid from 'uuid';


const LateralBar = props => {
    const LateralBar = () => {
        let numbers = [];
        for (let i = 0; i < (props.screen / 25); i += 1) {
            numbers.push(
                <div key={uuid.v4()} >
                    <div className="spot">
                    </div>
                    <p>{i}</p>
                </div>
            );
        }
        return numbers
    }
    return (
        <div className="lateral-bar" >
            <LateralBar />
        </div>
    )
}

export default LateralBar;