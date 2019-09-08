import React from 'react';
import ReactCountryFlag from 'react-country-flag';
import styled from 'styled-components';

const Country = styled(ReactCountryFlag)``;

const NotFound = styled.span``;

const ProductionCountries = ({ productionCountry }) => (
    productionCountry ? (
        productionCountry.map(country => (
            <Country key={ country.iso_3166_1 } code={ country.iso_3166_1 } svg styleProps={{ width: '100%', height: '100%' }} />
        ))
    ) : <NotFound>Not Production Countries</NotFound>
);

export default ProductionCountries;