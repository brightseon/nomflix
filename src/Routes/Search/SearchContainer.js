import React, { Component } from 'react';
import SearchPresenter from './SearchPresenter';
import { moviesApi, tvApi } from '../../api';

export default class extends Component {
    state = {
        movieResults : null,
        tvResults : null,
        searchTerm : '',
        // 사용자가 검색하기를 기다릴 것이니까 false
        loading : false,
        error : null
    };

    handleSubmit = event => {
        event.preventDefault();

        const { searchTerm } = this.state;

        if(searchTerm !== '') {
            this.searchByTerm();
        }
    };

    updateTerm = event => {
        const { target : { value } } = event;

        this.setState({
            searchTerm : value
        });
    };

    searchByTerm = async () => {
        const { searchTerm } = this.state;

        this.setState({ loading : true });
        
        try {
            const { data : { results : movieResults } } = await moviesApi.search(searchTerm);
            const { data : { results : tvResults } } = await tvApi.search(searchTerm);

            this.setState({
                movieResults,
                tvResults
            });
        } catch(err) {
            console.log('SearchContainer.js searchByTerm error : ', err);

            this.setState({ error : 'Cant find results.' });
        } finally {
            this.setState({ loading : false });
        }
    };

    render() {
        const { movieResults, tvResults, searchTerm, loading, error } = this.state;

        return (
            <SearchPresenter movieResults={ movieResults } tvResults={ tvResults } searchTerm={ searchTerm } 
                loading={ loading } error={ error } handleSubmit={ this.handleSubmit } updateTerm={ this.updateTerm } />
        );
    };
};