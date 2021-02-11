import React, { Component } from 'react';
import Description from './Description';
import Timeline from './Timeline';

const AboutMe = (props) => {
    return(
        <React.Fragment>
            <Description />
            <div className="divider"></div>
            <Timeline />
        </React.Fragment>
    );
}

export default AboutMe;