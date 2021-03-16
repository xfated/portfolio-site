import React from 'react';
import AboutMe from './AboutMe';
import Header from './Header';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Footer from './Footer';

function Main() {
    return (
        <>
            <Header />
            <Switch>
                <Route path="/" component={AboutMe} />
                <Redirect to="/" />
            </Switch>
            <Footer />
        </>
    )
}

export default withRouter(Main);