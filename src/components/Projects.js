import React, {useState} from 'react';
import { Card, CardImg, CardBody, CardImgOverlay, CardTitle, CardText,
        Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import { ExpProjects } from '../profile/projects.js';
import './Projects.css';

// create list for modal status
const numProjects = ExpProjects.length;
const initModalList = new Array(numProjects);
for (var i=0; i < numProjects; i++) {initModalList[i] = false;}

const Projects = (props) => {

    const [modalList, setModalList] = useState(initModalList);
    
    function toggleProjectModal(idx){
        return () => {
            let newList = [...modalList];
            newList[idx] = !newList[idx]
            setModalList(newList)
        }
    }

    function RenderProject( {project, toggleModal, key} ){
        return (
            <a style={{cursor:'pointer'}} onClick={toggleModal}>
                <Card className="project-card" key={key}>
                    <div className="project-card-img flex flex-horizontal-center flex-vertical-center border-bottom" >
                        <div className="project-card-img-frame p-2">
                            <img style={{ width:"100%", maxHeight:"100%"}} src={project.image} alt={project.title} />
                        </div>
                    </div>
                    <CardBody>
                        <CardTitle tag="h5">{project.title}</CardTitle>
                        <CardText>
                            {project.briefdesc}
                        </CardText>
                    </CardBody>
                </Card>
            </a>
        );
    };

    const ProjectCards = (category) => { 
        return ExpProjects.map((project, idx) => {
            const toggleModal = toggleProjectModal(idx);
            const project_desc = project.details.split('\n').map((line,i) => {
                return (
                    <span key={line+i}>{line}<br /></span>
                )
            });
            
            if (project.category===category){
                return (
                    <div className="col-6 col-md-4">
                        <div>
                            <RenderProject project={project} toggleModal={toggleModal} key={project.title} />
                            <Modal isOpen={modalList[idx]} toggle={toggleModal}>
                                <ModalHeader toggle={toggleModal} charCode="x">
                                    {project.title}
                                </ModalHeader>
                                <ModalBody>
                                    {project_desc}
                                </ModalBody>
                            </Modal>
                        </div>  
                    </div>
                );
            }
            else{
                return(
                    <></>
                );
            }
        });
    };

    return(
        <div className="project-section">
            <div className="section-header col-12 text-center">
                <h1 className="mb-0">Projects</h1>
                <p>Stuff I'd say I'm proud of</p>
            </div>
            <div className="flex flex-horizontal-center">
                <div className="project-container">
                    <div className="row mb-5 text-left">
                        <div className="col-12">
                            <h3 className="p-2 border-bottom border-dark mb-4">Competitions</h3>
                        </div>
                        {ProjectCards('competition')}
                    </div>
                    <div className="row mb-5">
                        <div className="col-12">
                            <h3 className="p-2 border-bottom border-dark mb-4">Hackathons</h3>
                        </div>
                        {ProjectCards('hackathon')}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;