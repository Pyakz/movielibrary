import React, { createContext, useState } from 'react'

export const CurrentPage = createContext();

export const PageProvider = (props) => {
   
    const [page, setPage] = useState(1)
    const [maxPage, setMaxPage] = useState(null)
    return (
        <CurrentPage.Provider value={{page, setPage,maxPage, setMaxPage}}>
            {props.children}
        </CurrentPage.Provider >
    )
}
