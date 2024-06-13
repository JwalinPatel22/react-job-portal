import React from 'react';

const List  = ({data}) => {
    return(
        <ul>
            {data.map(item, index => 
            (<li key={index}>{item}</li>)
            )}
        </ul>
    );
};