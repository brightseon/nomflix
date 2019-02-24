import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from 'Routes/Home';
import Search from 'Routes/Search';
import TV from 'Routes/TV';

export default () => (
    <Router>
        <>
            <Route path="/" exact component={ Home } />
            <Route path="/tv" exact component={ TV } />
            <Route path="/search" exact component={ Search } />
        </>
    </Router>
);