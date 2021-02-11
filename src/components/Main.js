import React from 'react';
import AboutMe from './AboutMe';
import Header from './Header';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Footer from './Footer';

function Main() {
    return (
        <div>
            <Header />
            <Switch>
                <Route path="/" component={AboutMe} />
                <Redirect to="/" />
            </Switch>
            <Footer />
        </div>
    )
}

export default withRouter(Main);