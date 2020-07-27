import React from 'react'
import LazyLoad from 'react-lazyload';
import styled from 'styled-components'
import LazyLoader from './LazyLoader';
import NotFound from './NotFound.png'

export const LoaderContainer = styled.div`

    justify-self:flex-start;
    height: 35rem;
    width: 23rem;
    display:flex;
    align-items: center;
    justify-content:center;
    box-shadow:var(--shadow1);
    background-color:lightgray;
    border-radius:1rem;
    overflow:hidden;

    &:hover { border-radius:0 }

    -moz-box-shadow: 0px 0px 20px -6px rgba(51,51,51,1);
    box-shadow: 0px 0px 20px -6px rgba(51,51,51,1);
    @media (max-width:500px) { width: 16rem !important; }

`;


const Image = ({details, loaded}) => {

    let source 
    if(details.poster_path === null) {
        source = NotFound
    } else {
        source =  `https://image.tmdb.org/t/p/w780/${details.poster_path}`
    }

    return (
        <LazyLoad height={100} offset={100} placeholder={<LoaderContainer> <LazyLoader />  </LoaderContainer>}> 
              <img src={source} alt={details.title} onLoad={() => loaded(true)} />   
        </LazyLoad>
    )
}

export default Image
