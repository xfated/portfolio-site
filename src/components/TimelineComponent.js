import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Timeline = (props) => {
    const Icon = (image, alt) => {
        return (
            <img src={image} alt={alt}></img>
        )
    };

    return(
        <div className="bg-light">
            <VerticalTimeline layout='1-column-left'>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#fdfdef', color: '#2b2626', 
                            borderBottom: '3px solid #fae9fc' }}
                    contentArrowStyle={{ borderRight: '7px solid #fdfdef' }}
                    date="Dec 2020 - Present"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#2b2626' }}
                    icon={<Icon image="assets/images/profile_pic.jpg" alt="my image"/>}
                >
                    <div className="row">
                        <div className="col-12 col-md-8">
                            <h3 className="vertical-timeline-element-title timeline-header">Data Science (Security) Intern</h3>
                            <h5 className="vertical-timeline-element-subtitle timeline-header">Shopee</h5>
                            <p>
                            Facial Recognition research
                            </p>
                        </div>
                        <div className="d-none d-md-block col-md-4">
                            <p>Hello!</p>
                        </div>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#fdfdef', color: '#2b2626', 
                            borderBottom: '3px solid #fae9fc' }}
                    contentArrowStyle={{ borderRight: '7px solid #fdfdef' }}
                    date="Dec 2020 - Present"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#2b2626' }}
                >
                    <div className="row">
                        <div className="col-12 col-md-8">
                            <h3 className="vertical-timeline-element-title timeline-header">Data Science (Security) Intern</h3>
                            <h5 className="vertical-timeline-element-subtitle timeline-header">Shopee</h5>
                            <p>
                            Facial Recognition research
                            </p>
                        </div>
                        <div className="d-none d-md-block col-md-4">
                            <p>Hello!</p>
                        </div>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#fdfdef', color: '#2b2626', 
                            borderBottom: '3px solid #fae9fc' }}
                    contentArrowStyle={{ borderRight: '7px solid #fdfdef' }}
                    date="Dec 2020 - Present"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#2b2626' }}
                >
                    <div className="row">
                        <div className="col-12 col-md-8">
                            <h3 className="vertical-timeline-element-title timeline-header">Data Science (Security) Intern</h3>
                            <h5 className="vertical-timeline-element-subtitle timeline-header">Shopee</h5>
                            <p>
                            Facial Recognition research
                            </p>
                        </div>
                        <div className="d-none d-md-block col-md-4">
                            <p>Hello!</p>
                        </div>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#fdfdef', color: '#2b2626', 
                            borderBottom: '3px solid #fae9fc' }}
                    contentArrowStyle={{ borderRight: '7px solid #fdfdef' }}
                    date="Dec 2020 - Present"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#2b2626' }}
                >
                    <div className="row">
                        <div className="col-12 col-md-8">
                            <h3 className="vertical-timeline-element-title timeline-header">Data Science (Security) Intern</h3>
                            <h5 className="vertical-timeline-element-subtitle timeline-header">Shopee</h5>
                            <p>
                            Facial Recognition research
                            </p>
                        </div>
                        <div className="d-none d-md-block col-md-4">
                            <p>Hello!</p>
                        </div>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#fdfdef', color: '#2b2626', 
                            borderBottom: '3px solid #fae9fc' }}
                    contentArrowStyle={{ borderRight: '7px solid #fdfdef' }}
                    date="Dec 2020 - Present"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#2b2626' }}
                >
                    <div className="row">
                        <div className="col-12 col-md-8">
                            <h3 className="vertical-timeline-element-title timeline-header">Data Science (Security) Intern</h3>
                            <h5 className="vertical-timeline-element-subtitle timeline-header">Shopee</h5>
                            <p>
                            Facial Recognition research
                            </p>
                        </div>
                        <div className="d-none d-md-block col-md-4">
                            <p>Hello!</p>
                        </div>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                />
            </VerticalTimeline>
        </div>
    );
}

export default Timeline;