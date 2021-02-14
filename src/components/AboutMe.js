import React, { Component } from 'react';
import Description from './Description';
import Timeline from './Timeline';
import Projects from './Projects';

const AboutMe = (props) => {
    return(
        <React.Fragment>
            <Description />
            <div className="divider"></div>
            <Timeline />
            <div className="divider"></div>
            <Projects />
        </React.Fragment>
    );
}

export default AboutMe;