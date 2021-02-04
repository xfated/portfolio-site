import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Timeline.css';
import { Experience } from '../profile/experience.js';
import { Button } from 'reactstrap';
import { TransitionGroup, CSSTransition } from "react-transition-group";

const block = getComputedStyle(document.documentElement).getPropertyValue("--block");
const background = getComputedStyle(document.documentElement).getPropertyValue("--background");
const highlight = getComputedStyle(document.documentElement).getPropertyValue("--highlight");
const header = getComputedStyle(document.documentElement).getPropertyValue("--header");
const muted = getComputedStyle(document.documentElement).getPropertyValue("--muted");
const text = getComputedStyle(document.documentElement).getPropertyValue("--text");

class Timeline extends Component {
    
    constructor(props) {
        super(props);

        // Get list for experience 
        const numExp = Experience.length;
        const expList = new Array(numExp);
        for (var i =0; i < numExp; i ++) { expList[i] = false; }

        this.state = {
            experienceClicked: expList
        };

        this.toggleExperienceState = this.toggleExperienceState.bind(this);
    }

    toggleExperienceState = (i) => {
        this.setState(state => {
            const list = state.experienceClicked.map((item, j) => {
                if (j===i){
                    return !item;
                } else {
                    return item;
                }
            });
            return {
                experienceClicked: list,
            };
        });
    };

    render() {
        const TimelineElements = Experience.map((exp, index) => {
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
                        iconOnClick={() => this.toggleExperienceState(index)}
                    >
                        <div className="row">
                            <div className="col-12 col-md-8">
                                <h4 className="vertical-timeline-element-title timeline-header">{exp.title}</h4>
                                <h6 className="vertical-timeline-element-subtitle timeline-header"><i>{exp.location}</i></h6>
                                
                                <div>
                                    <TransitionGroup component={null}>
                                        { this.state.experienceClicked[index] && 
                                            <CSSTransition classNames="desc" timeout={300}>
                                                <p>
                                                {desc}
                                                </p>
                                            </CSSTransition>
                                        }
                                    </TransitionGroup>
                                </div>
                            </div>
                            <div className="d-none d-md-block col-md-4">
                                
                            </div>
                            <div className="col-12">
                                <div className="timeline-desc text-center"
                                    onClick={() => this.toggleExperienceState(index)} >
                                    <Button size="block" className="ml-auto desc-button">
                                        <small>
                                            { !this.state.experienceClicked[index] && 
                                                <i class="fa fa-angle-down"></i>
                                            }
                                            { this.state.experienceClicked[index] && 
                                                <i class="fa fa-angle-up"></i>
                                            }
                                        </small>
                                    </Button>
                                </div> 
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