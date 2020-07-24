import React from 'react'
import styled from 'styled-components'

const TheMVDB = styled.div`
        /* margin-top: 2rem; */
        width: 10rem;
        align-self: center;   
`;


const NavLogo = () => {
    return (
        <TheMVDB>
            <p style={{fontSize:'1rem', color:'#319494'}}>Powered by:</p>
            <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer"> 
             <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg" alt="The Movie DB" />
            </a>

        </TheMVDB>
    )
}

export default NavLogo
