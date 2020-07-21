import React from 'react'
import styled from 'styled-components'
import Poster from './Poster.png';

const Logo = styled.div`
    text-align: center;
    width: 18rem;
    border-bottom: 1px solid #319494;
    margin-bottom: 1rem;
`;

const NavPoster = () => {
    return <Logo> <img src={Poster} alt="Poster" /> </Logo>
}

export default NavPoster
