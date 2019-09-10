import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import Videos from './Videos';
import ProductionCompanies from './ProductionCompanies';
import ProductionCountries from './ProductionCountries';
import Seasons from './Seasons';

const Contents = styled.div`
    margin-top: 10px;
    flex: 1;
    overflow-y: auto;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-template-rows: repeat(auto-fill, minmax(150px, 1fr));
    background-color: rgba(255, 255, 255, 0.1);
    position: relative;
`;

const TabContents = ({ result }) => (
    <Contents>
        <Route path="/movie/:id/videos" component={ () => <Videos videos={ result.videos.results } /> } />
        <Route path="/movie/:id/production-companies" component={ () => <ProductionCompanies productionCompany={ result.production_companies } /> } />
        <Route path="/movie/:id/production-countries" component={ () => <ProductionCountries productionCountry={ result.production_countries } /> } />
        <Route path="/show/:id/videos" component={ () => <Videos videos={ result.videos.results } /> } />
        <Route path="/show/:id/production-companies" component={ () => <ProductionCompanies productionCompany={ result.production_companies } /> } />
        <Route path="/show/:id/production-countries" component={ () => <ProductionCountries productionCountry={ result.production_countries } /> } />
        <Route path="/show/:id/seasons" component={ () => <Seasons seasons={ result.seasons } /> } />
    </Contents>
);

export default TabContents;