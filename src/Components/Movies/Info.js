import React, {Fragment} from 'react'
import Image from '../UI/Image'
import Rating from '../UI/Rating'

const Info = ({detail}) => {

 const genre = detail.genres
 let language;
 if(detail.spoken_languages.length !== 0) {
    language = detail.spoken_languages[0].name
 } else {
    language = 'Cannot find language..'
 }
    return (
        <Fragment > 
            <div className="poster">
                <Image details={detail} /> 
                <h3>{detail.runtime+"min"} / {language} / {detail.release_date.slice(0,4)} </h3>                       
                <Rating rating={detail.vote_average} card/>
            </div>
            <div className="details2">

        <div className="title">
            <h1>{detail.original_title}</h1>
            <p>{detail.tagline}</p>
        </div>

        <div className="genre">
            <h2>Genres</h2>
            <span>
                {genre.map(gen =>   <p key={gen.id}> &#9673; {gen.name} </p>)}
            </span>
         
        </div>

            <div className="plot">
                <h2>Plot</h2>
                <p>
                    {detail.overview ? detail.overview : 'No Plot'}
                </p>
            </div>
    </div>
    </Fragment>
    )
}

export default Info
