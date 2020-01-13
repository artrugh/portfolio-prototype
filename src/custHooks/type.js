import React, { useState, useEffect } from 'react';

import useInterval from './useInterval'

const Type = props => {

    useEffect(() => {
        document.title = "ArturoRugh - not found";
    }, []);

    const [string, setString] = useState("");
    const [index, setIndex] = useState(0);
    const [sign, setSign] = useState(true);

    const getRandomIntInclusive = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        let random = Math.floor(Math.random() * (max - min + 1)) + min;
        return random;
    };

    useInterval(() => {
        typing()
    }, getRandomIntInclusive(props.min, props.max));

    useInterval(() => {
        changeSign()
    }, 500);

    const typing = () => {
        if (index < props.string.length) {
            setString(`${string}${props.string[index]}`);
            setIndex(index + 1)
        }
    }

    const changeSign = () => {

        if (props.deleteSign && index < props.string.length) {
            setSign(!sign)
        }
        else if (props.deleteSign && index === props.string.length) {
            setSign(true)
        } else if (!props.deleteSign) {
            setSign(!sign)
        }
    }

    return (
        <span
            className={props.class}
            id={props.id}>
            {string}
            <span
                style={{
                    color: sign ? '#1e1e1e' : '#d4d4d4'
                }}
            >|</span>
        </span>
    );
}


export default Type;

