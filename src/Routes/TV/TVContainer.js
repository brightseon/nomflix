import React, { Component } from 'react';
import TVPresenter from './TVPresenter';

export default class extends Component {
    state = {
        topRated : null,
        popular : null,
        airingToday : null,
        loading : true,
        error : null
    };

    render() {
        const { topRated, popular, airingToday, loading, error } = this.state;

        return <TVPresenter topRated={ topRated } popular={ popular } airingToday={ airingToday } loading={ loading } error={ error } />;
    };
};