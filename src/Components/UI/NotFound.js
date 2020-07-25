import React, { useContext } from 'react'
import NoData from './NoData.png';
import { HomeButton } from './Pagination';
import { MovieGenre } from '../../Context/GenreContext'
import {  withRouter } from "react-router-dom";

const NotFound = ({history}) => {
const { setGenre, setGenreName } = useContext(MovieGenre)
    return (
        <div style={{ textAlign:'center', display:'flex', flexDirection:'column', alignItems:'center',marginTop:'2rem',height:'90vh' }}>
            <h1>Cannot find movies..</h1>
            <img src={NoData} alt="No DataFound" style={{width:'50%' }} />
            <HomeButton onClick={() =>{
                 history.push('/')
                 setGenre(28)
                 setGenreName('popular')
                 document.title = 'Home'
            }}> 
                <div > 
                <i className="fa fa-home" style={{marginRight:'.5rem'}}></i>
                <h4> Home </h4> 
              </div>
              </HomeButton>
        </div>
    )
}

export default withRouter(NotFound)
