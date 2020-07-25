import React, {useEffect, useContext, useState , Fragment} from 'react'
import { MovieGenre } from '../../Context/GenreContext';
import { MovieContext } from '../../Context/MovieContext';
import { CurrentPage } from '../../Context/PaginationContext';
import axios from 'axios';
import AnotherLoader from '../UI/AnotherLoader';
import styled from 'styled-components'
import MovieSection from './MovieSection';
import Select from '../UI/Select';
const Current = styled.div`
 
@media(max-width:800px) {
        margin-left: 0;
        align-self: center;
        }

        padding: 3rem 0;
        margin-top: 5rem;
        margin-left: 5rem;
        align-self: flex-start;
        color: var(--color1);
        h1 { font-size: 3rem; }
        p {
            font-size: 2rem;
            font-style: bold;
        }
`;

const Main = styled.main`
    height: ${props => props.load ? '100vh' : null};
    width: ${props => props.load ? '100%' : null};
    position:${props => props.currentWidth ?  'static' : 'absolute'};
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
`;

const Movies = (props) => {

    //API KEY
    const API_KEY = process.env.REACT_APP_API_KEY

    // Some state from 
    const { genre, genreName } = useContext(MovieGenre)
    const { currentMovies, setCurrentMovies, loading, setLoading } = useContext(MovieContext)
    const { page } = useContext(CurrentPage)
    const [sort, setSort] = useState('popularity.desc');
  
    useEffect(()=> {
        let link = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${page}`
        if(genre) {
            link = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=${sort}&with_genres=${genre}&page=${page}`
        
        } 

        const ourRequest = axios.CancelToken.source() 
    
        const fetchPost = async () => { 
            try {
                  const response = await axios.get(link, {cancelToken: ourRequest.token,})
                  setCurrentMovies(response.data.results)
                  setLoading(false)
            } catch (err) { 
                console.log(err) 
            }
        }
        fetchPost()
        return () => {
            // Cancelling Axios request
            ourRequest.cancel() 
            setLoading(true)       
        }
    },[genre,setCurrentMovies,setLoading, page,API_KEY, sort])

let Section =  ( 
                <Fragment >
                      <Current>      
                        <h1>{genreName.toUpperCase()}</h1>
                        <p>Movies</p>
                     </Current>
                     <Select selectChanger={setSort}/> 
                    <MovieSection movies={currentMovies}/>
                </Fragment>
                )

    return (
        <Main load={loading} {...props} currentWidth={props.position}> 
             
            {loading ?  <AnotherLoader /> : Section  }
        </Main > 
    )
}


export default Movies
