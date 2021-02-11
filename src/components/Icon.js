import React from 'react';
import './Icon.css';

const Icon = (props) => {
    return(
        <div className="col-5 icon-box rounded-pill text-center border-right-0">
            <span className="icon-text">{props.text}</span>
        </div>
    );
}

export default Icon;