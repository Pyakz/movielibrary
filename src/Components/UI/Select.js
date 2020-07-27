import React from 'react'
import styled from 'styled-components'

const StyledSelect = styled.select`
  padding-left: 1rem;
  background-color: var(--color2);
  height: 3rem;
  border-radius: 2rem;
  outline: none;
  transition: .3s ease-in-out;
  font-size: 1.8rem;
  color:white;
  margin: .5rem 0;
    &:hover {
        background-color: var(--FontDarkColor);
        cursor: pointer;
    }
`;

const StyledSelectItem = styled.option`
  outline: none;
  border-radius:15px;
  border-radius: 2rem;
  background-color: var(--FontDarkColor);
  font-size: 1.8rem;
`;

const Sort = styled.h3`
 margin:.5rem 0;
 @media(max-width:800px) {  align-self: center; }
`;

const Selection = ({sort}) => {

    return (
      <>
      <Sort>Sort By:</Sort>
      <StyledSelect onChange={(e) => sort(e.target.value)}>
                    <StyledSelectItem value='popularity.desc'>Popularity</StyledSelectItem>
                    <StyledSelectItem value='vote_count.desc'>Released Date</StyledSelectItem>
                    <StyledSelectItem value='revenue.desc'>Revenue</StyledSelectItem>
      </StyledSelect >
   </>
    )
}

export default Selection
