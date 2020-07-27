import React from 'react'
import styled from 'styled-components'


const Button = styled.div`

    background-color:var(--color2);
    position:fixed;
    bottom:0;
    right:0;
    margin:2.5rem;
    display:flex;
    justify-content:center;
    align-items:center;
    height: 50px;
    width: 80px;
    transition:all .3s ease-in-out;
    z-index:4;
    box-shadow: 0px 5px 18px -13px rgba(0,0,0,1);
    clip-path: polygon(40% 0%, 40% 20%, 100% 20%, 100% 80%, 40% 80%, 40% 100%, 0% 50%);

p {
        color:white;
        font-size:1.5rem;
        transition:all .3s ease-in-out;
        padding-bottom:0.2rem;
        padding-left:1rem;
    }

    &:hover {
        transform: translateX(-20%);
        background-color:orangered;
        cursor:pointer;
    }
`;

const BackButton = ({history}) => {
    const clickHandler = () => history.goBack()
    
    return (
        <Button onClick={clickHandler}>
            <strong> <p>Back</p> </strong>
        </Button>
    )
}

export default BackButton
