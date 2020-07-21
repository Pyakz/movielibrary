import React from 'react'
import LazyLoad from 'react-lazyload';
import styled from 'styled-components'
import NotFound from './NotFound.png'
const LoaderContainer = styled.div`

height: 35rem;
width: 23rem;
display:flex;
align-items: center;
justify-content:center;

@media (max-width:500px) {
        width: 16rem !important;
    }

`;


const Image = ({details}) => {
let source 
    if(details.poster_path === null) {
        source = NotFound
    } else {
        source =  `https://image.tmdb.org/t/p/w780/${details.poster_path}`
    }

    return (
        <LazyLoad height={100} offset={100} placeholder={<LoaderContainer> <div className="lds-facebook"><div></div><div></div><div></div></div> </LoaderContainer>}> 
             <img src={source} alt={details.title}  />   
        </LazyLoad>
    )
}

export default Image
