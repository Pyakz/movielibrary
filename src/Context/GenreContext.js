import React, { createContext, useState } from 'react'

export const MovieGenre = createContext();

export const GenreProvider = (props) => {
    const [genre, setGenre] = useState(null)
    const [genreName, setGenreName] = useState('Popular')
    return (
        <MovieGenre.Provider value={{genre, setGenre, genreName, setGenreName}}>
            {props.children}
        </MovieGenre.Provider >
    )
}
