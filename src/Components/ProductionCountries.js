import React from 'react';
import ReactCountryFlag from 'react-country-flag';
import styled from 'styled-components';
import NotFound from './NotFound';

const Item = styled.div``;

const Country = styled(ReactCountryFlag)``;

const Name = styled.span`
    opacity: 0;
`;

const ProductionCountries = ({ productionCountry }) => (
    productionCountry ? (
        productionCountry.map(country => (
            <Item key={ country.iso_3166_1 }>
                <Country code={ country.iso_3166_1 } svg styleProps={{ width: '100%', height: '100%' }} />
                <Name>{ country.name }</Name>
            </Item>
        ))
    ) : <NotFound />
);

export default ProductionCountries;