import React from 'react'
import styled from 'styled-components';

const Title = styled.div`

    text-align: center;
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px dotted;

    h1 {
        font-size: 4rem;
        @media (max-width:300px) { font-size: 5.5rem; }  
    }

    p { 
        font-size: 1.5rem; 
        @media (max-width:300px) {  font-size: 2.5rem; }   
    }

`;
const Genre = styled.div`

 @media(max-width:801px) {  text-align:center; }
    
  h2 {  @media (max-width:300px) { font-size: 2.5rem; }  }

         div {
            @media(max-width:802px) { text-align:center; justify-content:center; }
            display:flex;
            align-items:flex-start;
            justify-content:flex-start;
            display: flex;
            padding: 1rem;
            
            p { margin: 1rem; font-size: 1.5rem; }
                
    }

`;
const Plot = styled.div`

    @media(max-width:802px) { text-align:center; }
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

`;

const Overview = ({detail}) => {

    return (
        <>
            <Title>
                    <h1>{detail.original_title}</h1>
                    <p>{detail.tagline}</p>
            </Title>

            <Genre>
                    <h2>Genres</h2>
                    <div>
                        {detail.genres.map(gen =>   <p key={gen.id}> &#9673; {gen.name} </p>)}
                    </div>
            </Genre>
                
            <Plot>
                    <h2>Plot</h2>
                    <p> {detail.overview ? detail.overview : 'No plot available...'} </p>
            </Plot>  
        </>
    )
}

export default Overview
