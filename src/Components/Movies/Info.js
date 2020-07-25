import React, {Fragment, useState} from 'react'

import Overview from './Overview'

import Trailer from './Hidden/Trailer'
// import Cast from './Hidden/Cast'
// import Reviews from './Hidden/Review'
import SinglePoster from './SinglePoster'
import styled from 'styled-components';

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
  z-index: ${props => props.modal ? '500' : '0' };
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
 
  position:fixed;
  height: 40rem;
  width: 70rem; 
  opacity: 1;
  z-index:50;


  

  
  @media(max-width:600px) {
    height: 25rem;
    width: 95vw;
    }
    @media(max-width:300px) {
    height: 20rem;
    width: 95vw;
    }
`;

const Info = ({detail}) => {
    const [videoModal, setVideoModal] = useState(false)

    console.log(detail)
    return (
        <Fragment > 
        <SinglePoster detail={detail} />
        <Details>
            <Overview detail={detail}/>
            <Buttons> 
                <Button onClick={() => setVideoModal(true)} > <i className='fa fa-play'></i> Trailer </Button>
                <Button> <i className='fa fa-users'></i> Cast    </Button>
                <Button> <i className='fa fa-globe'></i> <a href={detail.homepage} target="_blank" rel="noopener noreferrer"> Website </a></Button>
                <Button> <i className='fa fa-pencil'></i> Reviews </Button>
            </Buttons>
        {videoModal ? <VideoModalBackDrop onClick={() => setVideoModal(false)}> 
                            <VideoModal> 
                                <Trailer video={detail} /> 
                            </VideoModal> 
                        </VideoModalBackDrop> 
                        : null
                        }  
        </Details>
         
    </Fragment>
    )
}

export default Info
