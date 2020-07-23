import React, { Fragment, useContext } from 'react'
import { NavLink } from "react-router-dom";
import { MovieGenre } from '../../Context/GenreContext';

const NavGenres = ({clicked, currentWidth}) => {
   const value = useContext(MovieGenre)
   const { setGenre } = value
   
 
   // Hard Coded these instead of fetching them, atlteast it could save data
   const Categories = [
      {id: 28, name: "Action"},
      {id: 12, name: "Adventure"},
      {id: 16, name: "Animation"},
      {id: 35, name: "Comedy"},
      {id: 80, name: "Crime"},
      {id: 99, name: "Documentary"},
      {id: 18, name: "Drama"},
      {id: 10751, name: "Family"},
      {id: 14, name: "Fantasy"},
      {id: 36, name: "History"},
      {id: 27, name: "Horror"},
      {id: 10402, name: "Music"},
      {id: 9648, name: "Mystery"},
      {id: 10749, name: "Romance"},
      {id: 878, name: "Science Fiction"},
      {id: 10770, name: "TV Movie"},
      {id: 53, name: "Thriller"},
      {id: 10752, name: "War"},
      {id: 37, name: "Western"},
    ];


    return (
        <Fragment>
            <p>Genres</p>
            <ul>
                {Categories.map(genre => (
                        <NavLink  key={genre.id} to={`/${genre.name}`} onClick={() => {
                            setGenre(genre.id)
                            if(!currentWidth) { clicked() }
                        }}> 
                            <span> &#9673; </span> {genre.name} 
                        </NavLink>     
                ))}
            </ul>
        </Fragment>
    )
}

export default NavGenres
