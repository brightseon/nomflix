import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Home from 'Routes/Home';
import Search from 'Routes/Search';
import Header from 'Components/Header';
import TV from 'Routes/TV';

export default () => (
    <Router>
        <>
            <Header />
            <Switch>
                <Route path="/" exact component={ Home } />
                <Route path="/tv" exact component={ TV } />
                <Route path="/search" component={ Search } />
                <Redirect from="*" to="/" />
            </Switch>
        </>
    </Router>
);