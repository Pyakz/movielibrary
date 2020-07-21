import React from 'react'
import styled from 'styled-components'
import NavLogo from './NavLogo';
import NavPoster from './NavPoster';
import NavGenres from './NavGenres';

const NavBar = styled.nav`

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: ${props => props.navHide ? 'sticky' : 'absolute'};
    top: 0;
    left: ${props => props.navHide ? '0' : '-100%'};
    padding: 1.5rem;
    line-height: 1rem;
    box-shadow: var(--shadow1);
    background-color: var(--DarkColor1) ; // var(--DarkColor1)
    height: 100%;
    z-index: 1001;
    transition: all .5s ease-in-out;
    
    @media(min-width:802px) {
        display: flex !important;
    }
    .active {
        background-color: #435c5c;
        border-radius: 1.5rem;
        font-weight: bold;
        color: #cfe4f3;
    }

    p {
        margin: 1rem 0;
        font-size: 1.8rem;
        font-weight: bold;
        color: var(--color1); //--FontDarkColor
    }

    ul {
       text-align: start;        
       display: flex;
       flex-direction: column;
            a { 
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
           
          

        span {
            margin: 1rem .5rem;
        }

    }

     @media (max-width:500px) {
       
        padding: 3rem;
        /* background-color: var(--DarkColor1);  */
    } 

`;


const CloseNav = styled.span`

    @media (min-width:800px) {
        display:none;
    }

    align-self:flex-end;
    transition:all .3s ease-in-out;
    font-size:2rem;
    &:hover {
        cursor:pointer;
        color:red;
    }
`;
const Nav = (props) => {
  
    return (
        <NavBar navHide={props.navHide}>
            {/* <Switch/> */}
            <CloseNav onClick={props.closer}> &#x2716; </CloseNav>
            <NavPoster />
            <NavGenres />
            <NavLogo />
        </NavBar>
    )
}

export default Nav
