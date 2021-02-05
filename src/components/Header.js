import React, { Component } from 'react';
import { Container, Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { MyInfo } from '../profile/myinfo';
import Decrypt from './Decrypt';

class Header extends Component {

    constructor(props){
        super(props);

        this.state = {
            isNavOpen: false,
            user: MyInfo,
            profile: 'assets/images/profile_pic.jpg'
        }

        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    
    render(){
        return(
            <React.Fragment>
                <Jumbotron style={{ backgroundImage:'assets/images/profile_pic.jpg', backgroundSize: 'cover' }}>
                    <Container className="text-center">
                        <h1 className="display-3">
                            <Decrypt text={this.state.user.name} time='1000'/>
                        </h1>
                        <p className="lead">{this.state.user.description}</p>
                        
                    </Container>
                </Jumbotron>
                <Navbar color='light' light expand="md">
                    <div className="container">
                        <NavbarBrand href="/">
                            My Journey
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav className="mr-auto" navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/">
                                        Projects
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            
                        </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;