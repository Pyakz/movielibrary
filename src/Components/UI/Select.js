import React, {useState} from 'react'
import styled from 'styled-components'


const StyledSelect = styled.div`
 align-self: flex-start;
  font-weight: bold;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-left: 2rem;
  outline: none;
  border: none;
  color:silver;
    @media(max-width:800px ) { align-self: center; }
`;

const SelecItem = styled.div`
  margin: 2rem;
  font-size:1.2rem;
  padding:${props => props.active ? '1rem 3rem' : '1rem 2rem'};
  border-radius: 2rem;
  box-shadow: var(--shadow1);
  color: white;
  background-color: ${props => props.active ? 'var(--color1)' : 'var(--color2)'};
  transition: .4s ease-in-out;
  box-shadow: 0px 3px 10px -5px rgba(0,0,0,1);
        :hover {
        transform: scale(1.1);
        cursor: pointer;
        background-color: var(--color2);
        }
`;
const Selection = ({selectChanger}) => {

    const [activePopularity, setActivePopularity] = useState(false)
    const [activeRated, setActiveRated] = useState(false)
    const [activeRevenue, setActiveRevenue] = useState(false) 

    const popularityActive = () => {
        selectChanger('popularity.desc')
        setActivePopularity(true)
        setActiveRated(false)
        setActiveRevenue(false)
    }
    const ratedActive = () => {
        selectChanger('vote_count.desc')
        setActiveRated(true)
        setActivePopularity(false)
        setActiveRevenue(false)
    }

    const revenueActive = () => {
        selectChanger('revenue.desc')
        setActiveRevenue(true)
        setActiveRated(false)
        setActivePopularity(false) 
    }
    return (
   <StyledSelect >
       <SelecItem active={activePopularity} onClick={popularityActive} >Popularity</SelecItem>
       <SelecItem active={activeRated} onClick={ratedActive} >Top Rated</SelecItem>
       <SelecItem active={activeRevenue} onClick={revenueActive} >Revenue</SelecItem>
   </StyledSelect >
    )
}

export default Selection
