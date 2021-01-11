import React from 'react';
import './CardPequeno.css';


export const CardPequeno = (props) => {
    return (
        <div className="littlecard-container"> 
            <div>
                <h5 className="email">{ props.email }</h5><b />
                <h5>{ props.end }</h5>
            </div>
        </div>
    );
};

