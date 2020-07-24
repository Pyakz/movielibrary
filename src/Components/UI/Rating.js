import React from 'react'
import styled from 'styled-components'

const StyledRating = styled.div`
    display:flex;
    justify-content:space-evenly;
    font-size: ${props => props.card ? '4rem' : null};
`;

const Rating = ({rating, ...rest}) => {
      // rounded and divided ratings of each movies
      // rating in this API is 1 - 10

      const stars = Math.floor(rating / 2)

      // initialize an array for mapping of JSX (White and Black Stars)
      let whiteRating = []
      let blackRating = []
  
      // create a loop for pushing number in to the array in order to increase the length property
      for (let i = 0; i < stars; i++) { whiteRating.push(i) }
      for (let j = 0; j < 5 - whiteRating.length; j++) { blackRating.push(j)}
  
      // Map through the arrays until it doesn't reach it length it will render Stars
      const blackRates = whiteRating.map( (_, index) => <span key={index}> &#9733; </span> )
      const whiteRates = blackRating.map( (_, index) => <span key={index}> &#x2606; </span> )
  
    return (
        <StyledRating {...rest}>
              {blackRates}
              {whiteRates}  
        </StyledRating>
    )
}

export default Rating
