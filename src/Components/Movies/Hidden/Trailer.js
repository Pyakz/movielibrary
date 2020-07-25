import React from 'react'
import styled from 'styled-components'
import ReactPlayer from 'react-player'

const TrailerSection = styled.div`

        display:flex;
        align-items: center;
        justify-content: center;
        border-radius: 1rem;
        box-shadow: var(--shadow1);
        height: 100%;
        width: 100%; 
        transition: .4s ease-in-out;
        z-index:777;

`;

const Trailer = ({video,trailerLoaded}) => {

    return (
        <TrailerSection>
                <ReactPlayer  
                width='100%'
                height='100%' 
                onReady={() => trailerLoaded(true)} 
                url={`https://www.youtube.com/watch?v=${video}?showinfo=0&enablejsapi=1&origin=${window.location.href}`} 
                controls  />
        </TrailerSection>
    )
}

export default Trailer
