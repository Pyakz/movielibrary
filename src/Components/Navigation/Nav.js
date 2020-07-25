import React from 'react'
import styled from 'styled-components'
import NavLogo from './NavLogo';
import NavPoster from './NavPoster';
import NavGenres from './NavGenres';

const NavBar = styled.nav`
    /* Setting up media queries */
    @media (min-height:1100px) { height:100vh; }
    @media (max-width:800px) { 
        overflow:auto scroll;
        left: ${props => props.navHide ? '0' : '-100%'};
        position:fixed; 
    } 
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    top: ${props => props.navHide ? '0' : null};
    width:${props => props.navHide ? 'auto' : null };
    left:-100%;
    padding: 1.5rem;
    line-height: 1rem;
    box-shadow: 6px 0px 8px -5px rgba(82,82,82,1);
    background-color:  var(--DarkColor1);
    height: 100%;
    z-index: 10;
    transition: all .35s ease-in-out;
    position: ${props => props.navHide ? 'sticky' : 'absolute'};

   
    .active {
        background-color: #435c5c;
        border-radius: 1.5rem;
        font-weight: bold;
        color: #cfe4f3;
        @media (max-width:800px) {  border-radius: 17.5rem !important; }
    }
      p {
        @media (max-width:800px) { margin: 2.5rem 0; align-self: center; font-size: 2rem;}
        margin: 1rem 0;
        font-size: 1.8rem;
        font-weight: bold;
        color: var(--color1); //--FontDarkColor
    }

    ul {
        @media (max-width:500px) { align-self: center; }
       text-align: start;        
       display: flex;
       flex-direction: column;
            a { 
                @media (max-width:500px) {font-size: 1.5rem; margin:.5rem; padding: 1.5rem .5rem !important; width: 100%;}
                @media (max-width:350px) { padding: 1rem !important; font-size: 1.2rem;}
                outline: none;
                font-size: 1.5rem;
                font-weight: 500;
                width: 100%;
                margin:.5rem 0;
                padding: .8rem;
                color: var(--color2); //--FontDarkColor
                transition: all .2s ease-in-out; 

                &:hover {
                        background-color: #435c5c;
                        border-radius: 1.5rem;
                        font-weight: bold;
                        cursor: pointer;
                        color: #cfe4f3;
                        transform:scale(1.1)
                    }
            }
        span { margin: 1rem .5rem; }
    }
`;


const CloseNav = styled.span`
    @media (min-width:800px) { display:none; }
    @media (max-width:800px) { font-size:3rem;}
    align-self:flex-end;
    transition:all .3s ease-in-out;
    font-size:2rem;
    &:hover { cursor:pointer; color:red; }
`;

const Nav = (props) => {

    return (
        <NavBar navHide={props.navHide} currentWidth={props.position}  >
            {/* <Switch/> */}
            <CloseNav onClick={props.clicked}> &#x2716; </CloseNav>
            <NavPoster />
            <NavGenres clicked={props.clicked}/>
            <NavLogo />
        </NavBar>
    )
}

export default Nav
