import React, {useState, useEffect, Fragment, useContext} from 'react'
import styled from 'styled-components'
import { CurrentPage } from '../../Context/PaginationContext';
import AnotherLoader from '../UI/AnotherLoader'
import axios from 'axios'
import Recommend from './Recommend';
import MovieInformation from './Info';
import BackButton from '../UI/BackButton'
import Pagination from '../UI/Pagination'

const StyledContainer = styled.div`
    
    transition: all 600ms cubic-bezier(0.215, 0.61, 0.355, 1);
    margin-top: ${props => props.stage ? null : '5rem'};
    padding:1rem; 
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width: ${props => props.stage ? '100%' : 'auto'};
    height:${props => props.stage ? '100vh' : null};

@media(max-width:500px) {
    text-align:center;
    align-self:center;
} 
`;
const StyledDetails = styled.div`
    @media(max-width:1000px) { flex-direction:column; align-items: center;}
    box-shadow: 0px 16px 0px -10px var(--color2);
    flex-wrap: wrap;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content:flex-start;
    padding:2rem 3rem;
`;


const Movie = ({match, history, position}) => {

    const [detail, setDetail] = useState({})
    const [reco, setReco] = useState([])
    const [loading, setLoading] = useState(true)
    const [loadingReco, setLoadingReco] = useState(true)
    const currentPage = useContext(CurrentPage)

    const {page} = currentPage
    // Movie Details
      useEffect(() => {
        document.title = detail.title ? detail.title : 'Loading..'

        let link = `https://api.themoviedb.org/3/movie/${match.params.id}?api_key=${process.env.REACT_APP_API_KEY}&append_to_response=videos`
        const ourRequest = axios.CancelToken.source() 
            const getMovie = async () => {
                try {
                    const results = await axios.get(link, {cancelToken: ourRequest.token})
                    setDetail(results.data);
                    setLoading(false)
                   
                } catch (err) { 
                    console.log(err) 
                }        
            }
            getMovie()

        return () => {
            setLoading(true)
            ourRequest.cancel() 
        }

    }, [match.params.id,detail.title])


    //suggested movies
    useEffect(()=> {
        const link = `https://api.themoviedb.org/3/movie/${match.params.id}/similar?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
    
        const ourRequest = axios.CancelToken.source() 

        const fetchPost = async () => { 
            try {
                  const response = await axios.get(link, {cancelToken: ourRequest.token})
                  setReco(response.data.results);
                  setLoadingReco(false)
            } catch (err) { 
                console.log(err) 
            }
        }

        fetchPost()
        return () => {
            // Cancelling Axios request
            ourRequest.cancel()    
        }
    },[match.params.id,page])

    let eachMovie = <AnotherLoader />
    let pagination = null
    if(reco.length !== 0 ) {pagination =  <Pagination /> }

    if(!loading) {
    eachMovie = 
    <Fragment> 
                <StyledDetails>
                <MovieInformation detail={detail} />
                </StyledDetails>
                {!loadingReco ? <Recommend reco={ reco }/> : <h1 style={{marginTop:'5rem'}} > Loading.. </h1>}
                {pagination}
                <BackButton history={history} />
     </Fragment>           
}
    return (
        <StyledContainer stage={loading} currentWidth={position}>
              {eachMovie}
        </StyledContainer>
    )
}

export default Movie
