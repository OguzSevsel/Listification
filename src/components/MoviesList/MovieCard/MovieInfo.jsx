import React from 'react'
import Button from "../../Buttons/Button"

function MovieInfo({className, genre, rating, plot}) {
  return (

    <div className={className}>

        <div className="movieInfoLeft">
            
            <div className="movieGenre style font">
                <p className='movieGenreText'>{genre}</p>
            </div>

            <div className="movieRating style font">
                <p className='style'>IMDB <br />{rating}</p>
            </div>

            <Button isIcon={false} buttonText={"Add to Must Watch"} className="mustWatch style font" rounding={"10px"}/>
                
        </div>

        <div className="movieInfoRight">
            <p className="moviePlot style font">{plot}</p>
        </div>

    </div>
  )
}

export default MovieInfo
