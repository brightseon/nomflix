import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    color: red;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
`;

const NotFound = () => <Container>Noting found</Container>

export default NotFound;