import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Timeline.css';
import { Experience } from '../profile/experience.js'


const block = getComputedStyle(document.documentElement).getPropertyValue("--block");
const background = getComputedStyle(document.documentElement).getPropertyValue("--background");
const highlight = getComputedStyle(document.documentElement).getPropertyValue("--highlight");
const header = getComputedStyle(document.documentElement).getPropertyValue("--header");
const muted = getComputedStyle(document.documentElement).getPropertyValue("--muted");
const text = getComputedStyle(document.documentElement).getPropertyValue("--text");

class Timeline extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isHovering: false,
        };

        this.handleMouseHover = this.handleMouseHover.bind(this);
    }

    handleMouseHover() {
        this.setState(this.toggleHoverState);
    }

    toggleHoverState(state){
        return {
            isHovering: !state.isHovering
        }
    }

    render() {
        const TimelineElements = Experience.map((exp) => {
            const desc = exp.description.split('\n').map((line) => {
                return (
                    <span>{line}<br /></span>
                )
            });
            return(
                <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: `${block}`, color: `${text}`, 
                                borderTop: `3px solid ${muted}` }}
                        contentArrowStyle={{ borderRight: `7px solid ${block}` }}
                        date={exp.date}
                        iconStyle={{ background: `${muted}`, color: `${highlight}` }}
                        
                    >
                        <div className="row"
                            onMouseEnter={this.handleMouseHover}
                            onMouseLeave={this.handleMouseHover}>
                            <div className="col-12 col-md-8">
                                <h4 className="vertical-timeline-element-title timeline-header">{exp.title}</h4>
                                <h6 className="vertical-timeline-element-subtitle timeline-header"><i>{exp.location}</i></h6>
                                <div>
                                { this.state.isHovering && 
                                    <p>
                                    {desc}
                                    </p>
                                }
                                </div>
                            </div>
                            <div className="d-none d-md-block col-md-4">
                                
                            </div>
                        </div>
                    </VerticalTimelineElement>
            )
        });
        return(
            <div className="theme-background">
                <VerticalTimeline className="vertical-timeline theme-background" layout='1-column-left'>
                    {TimelineElements}
                    <VerticalTimelineElement
                        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                    />
                </VerticalTimeline>
            </div>
        );
    } 
    
}

export default Timeline;