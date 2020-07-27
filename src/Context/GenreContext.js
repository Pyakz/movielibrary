import React, { createContext, useState } from 'react'

export const MovieGenre = createContext();

export const GenreProvider = (props) => {
    const [genre, setGenre] = useState(null)
    const [genreName, setGenreName] = useState('Popular')
    const [sort, setSort] = useState('popularity.desc')
    return (
        <MovieGenre.Provider value={{genre, setGenre, genreName, setGenreName,sort, setSort}}>
            {props.children}
        </MovieGenre.Provider >
    )
}
