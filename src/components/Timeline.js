import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Timeline.css';
import { Experience } from '../profile/experience.js';
import { Button } from 'reactstrap';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Theme } from '../profile/theme';
import Icon from './Icon';

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
            const desc = exp.description.split('\n').map((line, i) => {
                return (
                    <span key={line+i}>{line}<br /></span>
                )
            });
            
            const skills = exp.skills.split(',').map((skill,i) => {
                return (
                    <Icon key={skill+i} text={skill} />
                )
            });

            return(
                <VerticalTimelineElement
                        key={index}
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: `${Theme.block}`, color: `${Theme.text}`, 
                                borderTop: `3px solid ${Theme.muted}` }}
                        contentArrowStyle={{ borderRight: `7px solid ${Theme.block}` }}
                        date={exp.date}
                        iconStyle={{background: `${Theme.background}`}}
                        iconOnClick={() => this.toggleExperienceState(index)}
                        icon={<img className='logo' src={`${process.env.PUBLIC_URL}/${exp.logo}`} alt='' />}
                    >
                        <div className="row">
                            <div className="col-12 col-md-7">
                                <h4 className="vertical-timeline-element-title timeline-header">{exp.title}</h4>
                                <h6 className="vertical-timeline-element-subtitle timeline-header"><i>{exp.location}</i></h6>
                                <div>
                                    <p>
                                        <em>{exp.shortdesc}</em>
                                    </p>
                                </div>
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
                            <div className="d-none d-md-block col-md-5">
                                <div className="container">
                                    <div className="row">
                                        {skills}
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="timeline-desc text-center"
                                    onClick={() => this.toggleExperienceState(index)} >
                                    <Button size="block" className="ml-auto desc-button">
                                        <small>
                                            { !this.state.experienceClicked[index] && 
                                                <i className="fa fa-angle-down"></i>
                                            }
                                            { this.state.experienceClicked[index] && 
                                                <i className="fa fa-angle-up"></i>
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
            <div className="theme-background" style={{overflow:"hidden"}}>
                <div className="section-header col-12 text-center">
                    <h1 className="mb-0">Work Experience & Leadership Roles</h1>
                    <p>My previous roles and involvement in activities</p>
                </div>
                <VerticalTimeline className="vertical-timeline theme-background" layout='1-column-left'>
                    {TimelineElements}
                    <VerticalTimelineElement
                        iconStyle={{ background: `${Theme.muted}`, color: '#fff' }}
                    />
                </VerticalTimeline>
            </div>
        );
    } 
    
}

export default Timeline;