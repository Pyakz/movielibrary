import React, {Suspense} from 'react'
import styled from 'styled-components'
import Card from './Card';
import Pagination from '../UI/Pagination';

import NotFound from '../UI/NotFound';
// const Card = React.lazy(() => import('./Card'));
const StyledMovieSection = styled.section`
    margin-top: 1rem;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    vertical-align: middle;
`;
const MovieSection = ({movies}) => {
    let MovieContainer = <NotFound />
    let MoviePagination = null
if(movies.length !== 0) {
    MovieContainer = movies.map( movie => <Suspense key={movie.id} fallback={<h1> Loading ..</h1>}><Card details={movie} key={movie.id}/></Suspense> )      
    MoviePagination = <Pagination /> 
}
    return (
        <StyledMovieSection>
          {MovieContainer}
          {MoviePagination}
        </StyledMovieSection>
    )
}

export default MovieSection
