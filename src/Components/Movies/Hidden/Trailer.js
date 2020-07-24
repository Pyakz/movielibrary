import React, {useState} from 'react'
import styled from 'styled-components'
import ReactPlayer from 'react-player/youtube'
const TrailerSection = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;

        border-radius: 1rem;
        box-shadow: var(--shadow1);
        height: 100%;
        width: 100%; 
        /* transform:${props => props.modal ? 'translateY(0)' : 'translateY(120%)'}; */
        /* position:${props => props.state ? 'sticky' : 'absolute' }; */
        transition: .4s ease-in-out;
        z-index:12312;


`;

const Trailer = ({video}) => {
   const [ready, setReady] = useState(false)
   const [error, setError] = useState(false)

   console.log(window.location.href);
    return (
        <TrailerSection>
                <ReactPlayer  
                width='100%'
                height='100%' 
                onReady={() => setReady(true)} 
                onError={() => setError(true)}
                url={`https://www.youtube.com/watch?v=${video.videos.results[0].key}?showinfo=0&enablejsapi=1&origin=${window.location.href}`} 
                controls  />
        </TrailerSection>
    )
}

export default Trailer
