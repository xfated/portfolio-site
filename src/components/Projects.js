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
                    <div className="project-card-img mt-0 mb-0">
                            {/* <img style={{ width:"100%", maxHeight:"100%"}} src={project.image} alt={project.title} /> */}
                        <CardImg style={{height:"100%", objectFit:"cover"}} src={project.image} alt={project.title}></CardImg>
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
            const project_desc = project.details.map((line,i) => {
                /* Title */
                if (line.includes("<h3>")){
                    return <h2 key={line+i}>{line.replace("<h3>","")}</h2>
                }
                if (line.includes("<h6>")){
                    return <h6 key={line+i}>{line.replace("<h6>","")}</h6>
                }
                /* Bold */
                if (line.includes("**")){
                    const sentence = line.split("**").map((part,i) => {
                        return (i%2!=0) ? <strong>{part}</strong> : <span>{part}</span>;
                    });
                    return (
                        <span key={line+i}>{sentence}<br/></span>
                    )
                }
                /* Emphasis on first word */
                if (line.includes("<boldfirst>")){
                    line = line.replace("<boldfirst>","");
                    let spaceIndex = line.indexOf(' ');
                    return (
                        <span>
                            <strong>{line.substring(0,spaceIndex)}</strong>
                            <span>{line.substring(spaceIndex, line.length)}</span>
                            <br />
                        </span>
                    );
                }
                return (
                        <span key={line+i}>{line}<br /></span>
                    )
            });
            
            if (project.category===category){
                return (
                    <div className="col-6 col-md-4 col-lg-3 p-4">
                        <div>
                            <RenderProject project={project} toggleModal={toggleModal} key={project.title} />
                            <Modal isOpen={modalList[idx]} toggle={toggleModal} className="modal-w60">
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