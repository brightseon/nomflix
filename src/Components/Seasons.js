import React from 'react';
import styled from 'styled-components';

const Poster = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${ props => props.bgImage }); 
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
`;

const Contents = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 0;
    left: 0;
    opacity: 0;
`;

const Item = styled.div`
    position: relative;

    &:hover {
        background-color: rgba(0, 0, 0, 0.3);

        ${ Poster } {
            opacity: 0.3;
        }

        ${ Contents } {
            opacity: 1;
        }
    }
`;

const Name = styled.span``;

const EpisodeCount = styled.span``;

const Seasons = ({ seasons }) => (
    seasons.map(season => (
        <Item key={ season.id }>
            <Poster bgImage={ season.poster_path ? `https://image.tmdb.org/t/p/original${ season.poster_path }` : require('../assets/noPosterSmall.png') } />
            <Contents>
                <Name>{ season.name }</Name>
                <EpisodeCount>{ season.episode_count } episodes</EpisodeCount>
            </Contents>
        </Item>
    ))
);

export default Seasons;