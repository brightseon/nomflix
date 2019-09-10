import React from 'react';
import styled from 'styled-components';
import NotFound from './NotFound';

const Company = styled.div`
    width: 100%;
    height: 100%;
    background-image : url(${ props => props.bgImage });
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
`;

const Contents = styled.div`
    opacity: 0;
    display: flex;
    flex-direction: column;
`;

const Item = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;

    &:hover {
        background-color: rgba(0, 0, 0, 0.3);

        ${ Company } {
            opacity: 0.3;
        }

        ${ Contents } {
            opacity: 1
        }
    }
`;

const Name = styled.span`
    margin: 5px 0;
`;

const Country = styled.span``;

const ProductionCompanies = ({ productionCompany }) => (
    <>
    {
        productionCompany ? (
            productionCompany.map(company => (
                <Item key={ company.id }>
                    <Company bgImage={ `${ company.logo_path ? `https://image.tmdb.org/t/p/original${ company.logo_path }` : require('../assets/noPosterSmall.png') }` } />
                    <Contents>
                        <Country>{ company.origin_country }</Country>
                        <Name>{ company.name }</Name>
                    </Contents>
                </Item>
            ))
        ) : <NotFound />
    }
    </>
);

export default ProductionCompanies;