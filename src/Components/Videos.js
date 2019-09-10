import React from 'react';
import styled from 'styled-components';
import NotFound from './NotFound';

const Item = styled.div``;

const Video = styled.iframe`
    width: 100%;
    height: 100%;
`;

const Videos = ({ videos }) => (
    <>
        { 
            videos ? (
                videos.map(video => (
                    <Item key={ video.id }>
                        <Video src={ `https://www.youtube.com/embed/${ video.key }` } />
                    </Item>
                ))
            ) : <NotFound /> 
        }
    </>
);

export default Videos;