import React from 'react'
import styled from 'styled-components'

const BDrop = styled.div`
    position:fixed;
    height: 100vh;
    width: 100vw;
    background-color:black;
    opacity:0.5;
    z-index:1000;
    transition: width 1s, height .5s;
    @media(min-width:401px) {
        display:none;
    }
`;
const Backdrop = ({click}) => {

    //this backdrop will appear everytime the navbar 
    // is toggled between max width of 400 but this 
    // will not appear on 401px up
   // this click prop will close the nav if the backdrop is clicked
   // the value is coming of the App state

    return <BDrop onClick={click}> </BDrop>
    
}

export default Backdrop
