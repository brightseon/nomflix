import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import Loader from 'Components/Loader';
import TabContents from '../../Components/TabContents';

const Container = styled.div`
    height : calc(100vh - 50px);
    width : 100%;
    position : relative;
    padding : 50px;
`;

const Backdrop = styled.div`
    position : absolute;
    top : 0;
    left : 0;
    width : 100%;
    height : 100%;
    background-image : url(${ props => props.bgImage });
    background-position : center center;
    background-size : cover;
    filter : blur(3px);
    opacity : 0.5;
    z-index : 0;
`;

const Content = styled.div`
    display : flex;
    width : 100%;
    position : relative;
    z-index : 1;
    height : 100%;
`;

const Cover = styled.div`
    width : 30%;
    background-image : url(${ props => props.bgImage });
    background-position : center center;
    background-size : cover;
    height : 100%;
    border-radius : 5px;
`;

const Data = styled.div`
    width : 70%;
    margin-left : 10px;
    display: flex;
    flex-direction: column;
`;

const Title = styled.h3`
    font-size : 32px;
    margin-bottom : 10px;
`;

const ItemContainer = styled.div`
    margin : 20px 0;
    display: flex;
    align-items: center;
`;

const Item = styled.span``;

const IMDB = styled.img`
    width: 28px;
    cursor: pointer;
`;

const Divider = styled.span`
    margin : 0 10px;
`;

const Overview = styled.div`
    font-size : 12px;
    opacity : 0.7;
    line-height : 1.5;
    width : 50%;
`;

const Tabs = styled.div`
    display: flex;
`;

const Tab = styled(Link)`
    padding: 15px 20px;
    margin-top: 20px;
    background-color: rgba(255, 255, 255, 0.2);
    cursor: pointer;
    border-bottom : ${ props => props.isActive ? '4px solid #FFF' : 'none' };
`;

const DetailPresenter = ({ result, loading, error, isMovie, pathname }) => loading ? (
        <>
            <Helmet>
                <title>Loading | Nomflix</title>
            </Helmet>
            <Loader />
        </>
    ) : (
        <Container>
            <Helmet>
                <title>
                    { result.original_title ? result.original_title : result.original_name }{ ' ' }
                    | Nomflix
                </title>
            </Helmet>
            <Backdrop bgImage={ `https://image.tmdb.org/t/p/original${ result.backdrop_path  }` } />
            <Content>
                <Cover bgImage={ result.poster_path ? `https://image.tmdb.org/t/p/original${ result.poster_path  }` : require('../../assets/noPosterSmall.png') } />
                <Data>
                    <Title>{ result.original_title ? result.original_title : result.original_name }</Title>
                    <ItemContainer>
                        <Item>{ result.release_date ? result.release_date.substring(0, 4) : result.first_air_date.substring(0, 4) }</Item>
                        <Divider>•</Divider>
                        <Item>{ result.runtime ? result.runtime : result.episode_run_time[0] } min</Item>
                        <Divider>•</Divider>
                        <Item>
                            {
                                result.genres && result.genres.map((genre, idx) => 
                                    idx === result.genres.length - 1 ? genre.name : `${ genre.name } / `
                                )
                            }
                        </Item>
                        {
                            result.imdb_id && (
                                <>
                                    <Divider>•</Divider>
                                    <Item>
                                        <a href={ `https://www.imdb.com/title/${ result.imdb_id }` } target="noopener">
                                            <IMDB src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"></IMDB>
                                        </a>
                                    </Item>
                                </>
                            )
                        }
                    </ItemContainer>
                    <Overview>{ result.overview }</Overview>
                    <Tabs>
                        <Tab to={ `/${ isMovie ? 'movie' : 'show' }/${ result.id }/videos` } isActive={ pathname.includes('/videos') }>Videos</Tab>
                        <Tab to={ `/${ isMovie ? 'movie' : 'show' }/${ result.id }/production-companies` } isActive={ pathname.includes('/production-companies') }>Production Companies</Tab>
                        <Tab to={ `/${ isMovie ? 'movie' : 'show' }/${ result.id }/production-countries` } isActive={ pathname.includes('/production-countries') }>Production Countries</Tab>
                        { !isMovie && <Tab to={ `/show/${ result.id }/seasons` } isActive={ pathname.includes('/seasons') }>Seasons</Tab> }
                    </Tabs>
                    <TabContents result={ result } />
                </Data>
            </Content>
        </Container>
);

DetailPresenter.propTypes = {
    result : PropTypes.object,
    loading : PropTypes.bool.isRequired,
    error : PropTypes.string
};

export default DetailPresenter;