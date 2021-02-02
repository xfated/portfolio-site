import React from 'react';
import AboutMe from './AboutMe';
import Header from './Header';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

function Main() {
    return (
        <div>
            <Header />
            <Switch>
                <Route path="/" component={AboutMe} />
                <Redirect to="/" />
            </Switch>
        </div>

    )
}

export default withRouter(Main);