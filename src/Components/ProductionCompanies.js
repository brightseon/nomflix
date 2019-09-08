import React from 'react';
import styled from 'styled-components';

const Item = styled.div``;

const Company = styled.img`
    width: 100%;
    /* background-image : url(${ props => props.bgImage }); */
    /* background-color: rgba(255, 255, 255, 0.1); */
    /* background-size: cover; */
`;

const Name = styled.span``;

const ProductionCompanies = ({ productionCompany }) => (
    <>
    {
        productionCompany.map(company => (
            <Item key={ company.id }>
                { company.logo_path ? <Company src={ `https://image.tmdb.org/t/p/original${ company.logo_path }` } /> : <Name>{ company.name }</Name> }
                
                {/* <Name>{ company.name }</Name> */}
            </Item>
        ))

    }
    </>
);

export default ProductionCompanies;