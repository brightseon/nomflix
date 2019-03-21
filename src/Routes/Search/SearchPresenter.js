import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from 'Components/Loader';
import Section from 'Components/Section';
import Message from 'Components/Message';

const Container = styled.div`
    padding : 0px 20px;
`;

const Form = styled.form`
    margin-bottom : 50px;
    width : 100%;
`;

const Input = styled.input`
    all : unset;
    font-size : 28px;
    width : 100%;
`;

const SearchPresenter = ({ movieResults, tvResults, loading, searchTerm, error, handleSubmit, updateTerm }) => (
    <Container>
        <Form onSubmit={ handleSubmit }>
            <Input placeholder="Search Movies or TV Shows..." value={ searchTerm } onChange={ updateTerm } />
        </Form>
        {
            loading ? <Loader /> : (
                <>
                    {
                        movieResults && movieResults.length > 0 && (
                            <Section title="Movie Results">
                                { 
                                    movieResults.map(movie => <span key={ movie.id }>{ movie.title }</span>)
                                }
                            </Section>
                        )
                    }
                    {
                        tvResults && tvResults.length > 0 && (
                            <Section title="TV Show Results">
                                { 
                                    tvResults.map(show => <span key={ show.id }>{ show.name }</span>)
                                }
                            </Section>
                        )
                    }
                </>
            )
        }
        { error && <Message text={ error } color="#E74C3C" /> }
        { 
            tvResults && movieResults && tvResults.length === 0 && movieResults.length === 0 && (
                <Message text="Noting found" color="#95A5A6" />
            )
        }
    </Container>
);

SearchPresenter.propTypes = {
    movieResults : PropTypes.array,
    tvResults : PropTypes.array,
    loading : PropTypes.bool.isRequired,
    error : PropTypes.string,
    searchTerm : PropTypes.string,
    handleSubmit : PropTypes.func.isRequired,
    updateTerm : PropTypes.func.isRequired
};

export default SearchPresenter;