import React, { createContext, useState } from 'react'

export const MovieContext = createContext();

export const MovieProvider = (props) => {
    const [currentMovies, setCurrentMovies] = useState(null)
    const [loading, setLoading] = useState(true)
    return (
        <MovieContext.Provider value={{currentMovies, setCurrentMovies, loading, setLoading}}>
            {props.children}
        </MovieContext.Provider >
    )
}
