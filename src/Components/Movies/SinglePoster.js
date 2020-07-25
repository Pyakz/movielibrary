import React, {useState} from 'react'
import Image from '../UI/Image'
import Rating from '../UI/Rating'
import styled from 'styled-components';
import { LoaderContainer } from '../UI/Image';
import LazyLoader from '../UI/LazyLoader'
const Poster = styled.div`

        display: flex;
        flex-direction: column;
        text-align:center;
        align-items: center;
        flex:1;

        img {
            border-radius: 2rem;
            box-shadow: var(--shadow1);
            @media(min-width:900px) {  width:25rem !important; }
            @media(max-width:900px) {  width:70% !important; }
        }
        
        h3 {
            margin: .5rem;
            line-height: 2.5rem;
            font-size:1.5rem;
        }
    

`;
const SinglePoster = ({detail}) => {
    const [loaded, setLoaded] = useState(false);


    // if there is to language available
    // else it well choose the first index in array of language
    let language;
    if(detail.spoken_languages.length !== 0) {
        language = detail.spoken_languages[0].name
     } else {
        language = 'Cannot find language..'
     }

    return (
        <Poster didLoad={loaded}>
           {loaded ?  null : <LoaderContainer> <LazyLoader /> </LoaderContainer> } 
            <Image details={detail} loaded={setLoaded}/> 
            <h3>{detail.runtime+"min"} / {language} / {detail.release_date.slice(0,4)} </h3>                       
            <Rating rating={detail.vote_average} card/>
        </Poster>
    )
}

export default SinglePoster
