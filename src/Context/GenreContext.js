import React, { createContext, useState } from 'react'

export const MovieGenre = createContext();

export const GenreProvider = (props) => {
    const [genre, setGenre] = useState(null)
    return (
        <MovieGenre.Provider value={{genre, setGenre}}>
            {props.children}
        </MovieGenre.Provider >
    )
}
