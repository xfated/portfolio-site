import React, { useEffect } from 'react';
import Description from './Description';
import Timeline from './Timeline';
import Projects from './Projects';
import { Link, Element, Events, scrollSpy } from 'react-scroll'
import './AboutMe.css';

const AboutMe = (props) => {
    
    useEffect(() => {
        Events.scrollEvent.register('begin', function(to, element) {
            console.log('begin',arguments);
        });
        
        Events.scrollEvent.register('end', function(to,element) {
            console.log('end',arguments);
        });

        scrollSpy.update();
        
        return function cleanup(){
            Events.scrollEvent.remove('begin');
            Events.scrollEvent.remove('end');
        }
    });



    return(
        <React.Fragment>
            <div className="flex flex-horizontal-center" style={{background:"green"}}>
                <div className="navigation-bar flex flex-horizontal-center">
                    <Link className="nav-item" activeClass="active" to="description" spy={true} smooth={true} offset={50} duration={500}>
                        <i class="far fa-address-card fa-lg mr-1"></i>
                        <span className="d-none d-sm-inline">About Me</span>
                    </Link>
                    <Link className="nav-item" activeClass="active" to="timeline" spy={true} smooth={true} offset={50} duration={500}>
                        <i class="fas fa-briefcase fa-lg mr-1"></i>
                        <span className="d-none d-sm-inline">Experience</span>
                    </Link>
                    <Link className="nav-item" activeClass="active" to="projects" spy={true} smooth={true} offset={50} duration={500}>
                        <i class="fas fa-tools fa-lg mr-1"></i>
                        <span className="d-none d-sm-inline">Projects</span>
                    </Link>
                </div>
            </div>
            
            
            <Element name="description" className="element">
                <Description />
            </Element>
            <div className="divider"></div>
            <Element name="timeline" className="element">
                <Timeline />
            </Element>
            <div className="divider"></div>
            <Element name="projects" className="element">
                <Projects />
            </Element>
        </React.Fragment>
    );
}

export default AboutMe;