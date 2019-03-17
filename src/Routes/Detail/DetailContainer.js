import React, { Component } from 'react';
import DetailPresenter from './DetailPresenter';
import { moviesApi, tvApi } from '../../api';

export default class extends Component {
    constructor(props) {
        super(props);

        const { location : { pathname } } = props;
        
        this.state = {
            result : null,
            loading : true,
            error : null,
            isMovie : pathname.includes('/movie/')
        };
    };

    componentDidMount = async () => {
        const { match : { params : { id } }, history : { push } } = this.props;
        const { isMovie } = this.state;
        const parsedId = parseInt(id);
        
        if(isNaN(parsedId)) {
            return push('/');
        }

        let result = null;
        
        try {
            if(isMovie) {
                // 이것은 const result = request.data가 붙은 것과 동일하다.
                // 여기서 request는 await mmviesApi.movieDetail(parsedId)의 결과 값
                ({ data : result } = await moviesApi.movieDetail(parsedId));
            } else {
                ({ data : result } = await tvApi.showDetail(parsedId));
            }
        } catch(err) {
            console.log('DetailContainer.js componentDidMount error : ', err);

            this.setState({ error : 'Cant find anything.' });
        } finally {
            this.setState({ loading : false, result });
        }
    };

    render() {
        const { result, loading, error } = this.state;
        console.log(this.state);

        return <DetailPresenter result={ result } loading={ loading } error={ error } />;
    };
};