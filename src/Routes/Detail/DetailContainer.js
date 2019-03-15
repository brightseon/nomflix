import React, { Component } from 'react';
import DetailPresenter from './DetailPresenter';

export default class extends Component {
    state = {
        result : null,
        loading : true,
        error : null
    };

    componentDidMount = async () => {
        const { match : { params : { id } }, history : { push } } = this.props;
        const parsedId = parseInt(id);

        if(isNaN(parsedId)) {
            push('/');

            return;
        }
    };

    render() {
        const { result, loading, error } = this.state;

        return <DetailPresenter result={ result } loading={ loading } error={ error } />;
    };
};