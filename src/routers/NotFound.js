import React, { useEffect } from 'react';

import useWindowDimensions from '../custHooks/useWindowDimensions';
import Type from '../custHooks/type';

import LateralBar from './../components/LateralBar';

import { data } from './../data'

const NotFound = () => {

    useEffect(() => {
        document.title = "Not found";
    }, []);

    const { height} = useWindowDimensions();

    return (
        <div className="container" id="not-found" >
            <LateralBar screen={height} />
            <div className="content">
                <h2> Not Found / try it again.</h2>
                <Type
                    string={data.binary_code}
                    min={1}
                    max={2}
                    deleteSign={true}
                    class="code"
                />
            </div>
        </div>
    )
}

export default NotFound;