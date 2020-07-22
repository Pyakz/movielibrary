import React, {useState, useEffect, useContext, Fragment} from 'react'
import { MovieGenre } from '../../Context/GenreContext';
import { MovieContext } from '../../Context/MovieContext';

import axios from 'axios';
// import Loader from '../UI/Loader';
// import LazyLoader from '../UI/LazyLoader';
import AnotherLoader from '../UI/AnotherLoader';
import styled from 'styled-components'
import MovieSection from './MovieSection';

const Current = styled.div`
 
 @media(max-width:802px) {
    margin-left: 0;
    align-self: center;
    }
        padding: 3rem 0;
        margin-top: 5rem;
        margin-left: 5rem;
        align-self: flex-start;
        color: var(--color1);
        h1 {
           font-size: 3rem;
        }
        p {
            font-size: 2rem;
            font-style: bold;
        }
`;

const Main = styled.main`
    height: ${props => props.load ? '100vh' : null};
    width: ${props => props.load ? '100%' : null};
    /* position:${props => props.navHide ?  null: 'absolute'}; */
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
`;

const Movies = (props) => {

    const value = useContext(MovieGenre)
    const myMovies = useContext(MovieContext)
    const { currentMovies, setCurrentMovies, loading, setLoading} = myMovies
    const { genre } = value

    useEffect(()=> {
        let isCancelled = false;
        const movie = async() => {
            try {
                if(genre) { 
                    const results = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=c24e2e0c38251c16e41291ca0067c75d&sort_by=popularity.desc&with_genres=${genre}&page=1`)
                    const gotData = await results.data.results;
                    setCurrentMovies(gotData)
                    setLoading(false)
                } else {
                    const results = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=c24e2e0c38251c16e41291ca0067c75d&page=1`)
                    const gotData = await results.data.results;
                    setCurrentMovies(gotData)
                    setLoading(false)
                }
             
            } catch (error) {
                if (!isCancelled) {
                    throw error;
                  }
            }
          
        }
        movie()
        return () => {
            setLoading(true)
            isCancelled = true;
            console.log('Movie section unmounts');
        }

    },[genre,setCurrentMovies,setLoading])
    

let Section =  ( 
                <Fragment >
                    <Current>
                    <h1>{props.match.params.category ? props.match.params.category.toUpperCase() : 'Popular' }</h1>
                    <p>Movies</p>
                    </Current>
                    <MovieSection movies={currentMovies}/> 
                </Fragment>
                )

    return (
        <Main load={loading} {...props}> 
            {loading ?  <AnotherLoader /> : Section  }
        </Main > 
    )
}


export default Movies
