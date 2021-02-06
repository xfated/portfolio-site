import React, { Component } from 'react';
import { Container, Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { MyInfo } from '../profile/myinfo';
import Decrypt from './Decrypt';
import { Theme } from '../profile/theme';
import { CSSTransition } from "react-transition-group";
import './Header.css';


class Header extends Component {

    constructor(props){
        super(props);

        this.state = {
            isNavOpen: false,
            user: MyInfo.firstname +  ' ' + MyInfo.lastname,
            description: MyInfo.description,
            mounted: false
        }

        this.toggleNav = this.toggleNav.bind(this);
        this.resizedScreen = this.resizedScreen.bind(this);
    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    
    componentDidMount(){
        window.addEventListener("resize", this.resizedScreen());
        this.setState({
            mounted: true
        });
    }

    resizedScreen() {
        if (window.innerWidth <= 576) {
            this.setState({ user: MyInfo.firstname})
        }
        else {
            this.setState({ user: MyInfo.firstname + ' ' + MyInfo.lastname})
        }
    }

    render(){

        const desc = this.state.description.split('\n').map((line) => {
            return (
                <span>{line}<br /></span>
            )
        });

        return(
            <React.Fragment>
                <Jumbotron style={{ backgroundImage: `url('assets/images/wallpaper.jfif')`, backgroundSize: 'cover' }}>
                    <Container className="text-center">
                        <h1 className="display-3 profile-header">
                            <Decrypt text={this.state.user} time='1500'/>
                        </h1>
                        <CSSTransition in={this.state.mounted} classNames="profile-desc-trans" timeout={1000}>
                            <p className="lead profile-desc">{desc}</p>
                        </CSSTransition>
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
                <div className="row divider"></div> 
            </React.Fragment>
        );
    }
}

export default Header;