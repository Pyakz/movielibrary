import React, {Fragment, useState} from 'react'
import styled from 'styled-components';

import Overview from './Overview'
import Trailer from './Hidden/Trailer'
import LazyLoader from '../UI/LazyLoader'
import SinglePoster from './SinglePoster'

const Details = styled.div`

        align-self: flex-start;
        @media(max-width:800px) { align-self: center; }
        margin: 2rem 3rem;
        padding: 2rem;
        flex: 2;
        justify-self:flex-start;

`;

const Buttons = styled.div`

    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    align-content:flex-start;
    justify-content:space-evenly;

`;

const Button = styled.span`
            
            background-color:var(--color1);
            color:white;
            margin:1rem;
            border-radius:50rem;
            padding:1rem 2.5rem;
            transition: all .3s ease-in-out;
            font-size:1.2rem;
            box-shadow: 0px 3px 10px -5px rgba(0,0,0,1);

            i { margin-right:.5rem; }

            &:hover {
                    transform:scaleX(1.1);
                    color:var(--DarkColor1);
                    cursor:pointer;
                    background-color:lightblue;
                    box-shadow: 0px 3px 17px -5px rgba(0,0,0,1);
            }
`;

const VideoModalBackDrop = styled.div`

  background-color:rgba(0,0,0, 0.5);
  display:flex;
  align-items: center;
  justify-content: center;
  transition: .5s ease-in-out;
  z-index: ${props => props.modal ? '666' : '0' };
  top:0;
  left:0;
  height:100vh;
  width: 100%;
  position:fixed;

  @media(max-width:600px) {
    height:100%;
    }
    @media(max-width:300px) {
        height:100%;
    }
`;

const VideoModal = styled.div`
   display:flex;
  align-items: center;
  justify-content: center;
  position:fixed;
  height: 40rem;
  width: 70rem; 
  opacity: 1;
  z-index:555;
  display:${props => props.trailer ? 'inline-flex' : 'none'};
  
    

    @media(max-width:800px) {
        height: 50vh;
        width: 90vw; 
    }

    @media(max-width:500px) {
        transform: rotateZ(-90deg) ;
        width: 120vw; 
    }
`;

const Error = styled.div`
  padding: 3rem 5rem;
  background-color: #316169;
`;

const Info = ({detail}) => {
    const [videoModal, setVideoModal] = useState(false)
    const [trailerLoaded, setTrailerLoaded] = useState(false)

    // Some videos are not trailer..
    // so return only the movies of type of Trailer
    // and pass the first index[0].key as a props

    const OfficialTrailer = detail.videos.results.filter(video => video.type === 'Trailer')
    let trailer = <Error > <h1> Can't find trailer for this movie. </h1> </Error> 
    if(OfficialTrailer.length !== 0 ) {
                trailer =    <>
                                {trailerLoaded ? null : <LazyLoader /> }
                                <VideoModal trailer={trailerLoaded}> 
                                    <Trailer video={OfficialTrailer[0].key} trailerLoaded={setTrailerLoaded} /> 
                                </VideoModal> 
                            </>
        }

    
    return (
        <Fragment > 
                <SinglePoster detail={detail} />
                <Details>
            <Overview detail={detail}/>
            <Buttons> 
                <Button onClick={() => setVideoModal(true)} > <i className='fa fa-play'></i> Trailer </Button>
                <Button> <i className='fa fa-globe'></i> <a href={detail.homepage ? detail.homepage : null} target="_blank" rel="noopener noreferrer" onClick={() => detail.homepage ? null : alert('No Website Available')} > Website </a></Button>
            </Buttons>
                        {videoModal ? <VideoModalBackDrop onClick={() => {
                                            setVideoModal(false)
                                            setTrailerLoaded(false)
                                        }}> 
                             {trailer} 
                                 </VideoModalBackDrop> : null 
                        }  

        </Details>
        </Fragment>
    )
}

export default Info
