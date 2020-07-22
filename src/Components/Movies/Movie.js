import React, {useState, useEffect, Fragment} from 'react'
import styled from 'styled-components'
// import LazyLoader from '../UI/LazyLoader'
import AnotherLoader from '../UI/AnotherLoader'
import axios from 'axios'
import Recommend from './Recommend';
import MovieInformation from './Info';
import BackButton from '../UI/BackButton'


const StyledContainer = styled.div`

transition: all 600ms cubic-bezier(0.215, 0.61, 0.355, 1);
margin-top: ${props => props.stage ? null : '5rem'};
padding:1rem; 
display:flex;
position:${props => props.currentWidth ? 'static' : 'absolute' };
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
  
  @media(max-width:900px) {
        flex-direction:column;
    }
    
    box-shadow: 0px 16px 0px -10px var(--color2);
    flex-wrap: wrap;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:flex-start;
    padding:2rem 3rem;

    .poster {
        display: flex;
        flex-direction: column;
        text-align:center;
        align-items: center;
        flex:1;

        img {
            border-radius: 2rem;
            box-shadow: var(--shadow1);
             
            @media(max-width:900px) {
                    width:70% !important;
            }
              
        }
        h3 {
            margin: .5rem;
            line-height: 2.5rem;
            font-size:1.5rem;
        }
    }
    
    .details2 {
        align-self: flex-start;
        margin: 2rem;
        padding: 2rem;
        flex: 2;

        .title {

            text-align: center;
            margin-bottom: 2rem;
            padding-bottom: 2rem;
            border-bottom: 1px dotted;
                h1 {
                    @media (max-width:300px) {
                        font-size: 5.5rem;
                    } 
                    font-size: 4rem;
                }
                p {
                    @media (max-width:300px) {
                        font-size: 2.5rem;
                    } 
                    font-size: 1.5rem;
                }
        }
    
        .genre {
            @media(max-width:801px) {
                    text-align:center;
                }
    
            h2 {
                  @media (max-width:300px) {
                        font-size: 2.5rem;
                    } 
            }
                span {
                    @media(max-width:802px) {
                        text-align:center;
                    }
                    display: flex;
                    padding: 1rem;
                    p {
                        margin: 1rem;
                        font-size: 1.5rem;
                    }
                }
        }
        .plot {
            @media(max-width:802px) {
                text-align:center;
                }
            width: 100%;
            h2 {
                
                  @media (max-width:300px) {
                        font-size: 2.5rem;
                    } 
            }
           p {
               margin: 1rem;
               padding: 1rem;
               font-size: 1.5rem;
               text-indent: 1.5rem;

               @media (max-width:300px) {
                        font-size: 2.5rem;
                    } 

           }
        }
      
    }

`;



const Movie = ({match, history, position}) => {

    const [detail, setDetail] = useState({})
    const [reco, setReco] = useState([])
    const [loading, setLoading] = useState(true)
    const [loadingReco, setLoadingReco] = useState(true)


    useEffect(() => {
      
        let isCancelled = false;
        try {

            if(!isCancelled) {
                const getMovie = async () => {
                    const results = await axios.get(`https://api.themoviedb.org/3/movie/${match.params.id}?api_key=c24e2e0c38251c16e41291ca0067c75d&append_to_response=videos`)
                    setDetail(results.data);
                    setLoading(false)
                }
                getMovie()
            }
        } catch (error) {
            console.log(error);
        }
       
    
        return () => {
            setLoading(true)
            isCancelled = true;
            console.log('Movie section unmounts');
        }

    }, [match.params.id])


    useEffect(() => {
      
        let isCancelled = false;
        try {
            if(!isCancelled) {
                const getReco = async () => {
                    const results = await axios.get(`https://api.themoviedb.org/3/movie/${match.params.id}/similar?api_key=c24e2e0c38251c16e41291ca0067c75d&page=1`)
                    setReco(results.data.results);
                    setLoadingReco(false)
                }
                getReco()
            }
        } catch (error) {
            console.log(error);
        }
       
    
        return () => {
            setLoading(true)
            isCancelled = true;
            console.log('Movie section unmounts');
        }

    }, [match.params.id])


    let eachMovie = <AnotherLoader />

if(!loading) {
    eachMovie = 
    <Fragment> 
                <StyledDetails>
                <MovieInformation detail={detail} />
                </StyledDetails>
                {!loadingReco ? <Recommend reco={ reco }/> : <h1 style={{marginTop:'5rem'}} > Loading.. </h1>}
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
