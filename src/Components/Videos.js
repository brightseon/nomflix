import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    /* display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-auto-rows: auto; */
`;

const Item = styled.div``;

const Video = styled.iframe`
    width: 100%;
    height: 100%;
`;

const Videos = ({ videos }) => (
    <>
        {/* <Container> */}
        { videos.map(video => (
            <Item key={ video.id }>
                <Video src={ `https://www.youtube.com/embed/${ video.key }` } />
            </Item>
        )) }
        {/* </Container> */}
    </>
);

export default Videos;