import React from 'react';
import { useState, useEffect } from 'react';

export default function Timer(){

    const [sec, updateSec] = useState(0);

    useEffect(function(){
        //increment timer
        function tick(){
            updateSec(prevSeconds => prevSeconds + 1);
        };

        //setting up time interval
        const timerId = setInterval(tick, 1000);

        //cleaning up interval
        return () => clearInterval(timerId);
    }, []); //empty array ensures that this only runs once

    return(
        <>
            <h1>Timer {seconds} seconds</h1>
        </>
    );
};