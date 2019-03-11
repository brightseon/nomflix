import React, { Component } from 'react';
import SearchPresenter from './SearchPresenter';

export default class extends Component {
    state = {
        movieResult : null,
        tvResult : null,
        searchTerm : '',
        // 사용자가 검색하기를 기다릴 것이니까 false
        loading : false,
        error : null
    };

    render() {
        const { movieResult, tvResult, searchTerm, loading, error } = this.state;

        return <SearchPresenter movieResult={ movieResult } tvResult={ tvResult } searchTerm={ searchTerm } loading={ loading } error={ error } />;
    };
};