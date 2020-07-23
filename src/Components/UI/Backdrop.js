import React from 'react'
import styled from 'styled-components'

const BDrop = styled.div`

   @media(min-width:800px) {
        opacity:1;
        background-color:transparent;
    }

    position:fixed;
    height: 100vh;
    width: 100vw;
    background-color:black;
    opacity:0.3;
    z-index:1000;
    transition: all .9s ease-in-out;

 
`;
const Backdrop = ({click, position}) => {

    //this backdrop will appear everytime the navbar 
    // is toggled between max width of 400 but this 
    // will not appear on 401px up
   // this click prop will close the nav if the backdrop is clicked
   // the value is coming of the App state

    return <BDrop onClick={ !position ? click : null }  > </BDrop>
    
}

export default Backdrop
