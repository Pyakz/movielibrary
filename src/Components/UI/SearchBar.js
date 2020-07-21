import React, { useState, useEffect, useRef, useContext } from 'react'
import {  withRouter } from "react-router-dom";

import styled from 'styled-components'
import axios from 'axios';
import { MovieContext } from '../../Context/MovieContext';

const Search = styled.form`

 
    @media (max-width:800px) {
        height: 4.5rem !important;
        border-radius: 3rem !important;
        width: ${props => props.clicked ? '18rem' : ' 45px !important' };
        position: sticky;
        box-shadow: none !important;
        margin:0;
        input { height: 37px !important; }
    }

    box-shadow: 0px 5px 18px -13px rgba(0,0,0,1);
    margin:2rem 3rem;
    float: right;
    position: fixed;
    top: 0;
    right: 0;
    font-style: inherit;
    transition: all .5s ease-in-out;
    height: 50px;
    z-index: 1;
    display:flex;
    justify-content:flex-end;
    align-items:center;
    background: var(--DarkColor1);
    box-sizing: border-box;
    border-radius: 25px;
    border: 4px solid var(--color2);
    overflow: hidden;
    width: ${props => props.clicked ? '20rem' : ' 50px' };


    h1 {
            overflow: hidden;
            outline: none;
            box-sizing: border-box;
            width: 43.5px;
            height: 43.5px;
            top: 0;
            right: 0;
            border-radius: 50%;
            color: var(--color2);
            text-align: center;
            font-size: 3rem;
            transform: rotateY(180deg);
            transition: all .5s ease-in-out;
    }

    input {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;;
            height: 42.5px;
            line-height: 30px;
            outline: 0;
            border: 0;
            color: var(--color2);
            display: ${props => props.clicked ? 'block' : 'none' };
            font-weight: bold;
            border-radius: 20px;
            padding: 0 20px;
            font-size: 1.5rem;

            ::selection {
                background-color:var(--color2);
                color:white;
            }
    }


    &:hover {
        cursor: pointer;
    }


    
    &:hover .fa{
        background: white;
        color: black;
    }

`;

const SearchBar = (props) => {

       // i just found this solution for this toggle of search box, i dunno but its amazing
       const myRef = useRef();
       const { setCurrentMovies, setLoading } = useContext(MovieContext)
       const [open, setOpen] = useState(false)
       const [query, setQuery] = useState('')

  
       const handleClickOutside = e => {
           if (!myRef.current.contains(e.target)) {
               setOpen(false);
           }
       };
   
       const handleClickInside = () => setOpen(true);
      
       const handleSubmit = (e) => {
        setLoading(true)
        props.history.push('/results')
        const movie = async() => {
                const results = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=c24e2e0c38251c16e41291ca0067c75d&query=${query}&page=1`)
                const gotData = await results.data.results;
                setCurrentMovies(gotData);
                setQuery('')
                setLoading(false)
                console.log(gotData);
        }
        movie()
        setQuery('')
        setOpen(false);
        e.preventDefault()
       };

       useEffect(() => {
           myRef.current.focus();
           document.addEventListener('mousedown', handleClickOutside);
           return () => document.removeEventListener('mousedown', handleClickOutside);
       },[]);

       
    return (
        <Search onClick={handleClickInside} clicked={open} ref={myRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Find movies.." onChange={(e) => setQuery(e.target.value)} />
            <h1>&#x2315;</h1>
        </Search>
    )
}

export default withRouter(SearchBar)
