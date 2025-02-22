import React from 'react'

function MovieInfo({className, genre, rating, plot}) {
  return (

    <div className={className}>

        <div className="movieInfoLeft">
            <div className="movieGenre">
                <p>{genre}</p>
            </div>

            <div className="movieRating">
                <p>IMDB <br />{rating}</p>
            </div>
            <button className="mustWatch">
                Add to Must Watch
            </button>
        </div>

        <div className="movieInfoRight">
            <p className="moviePlot">{plot}</p>
        </div>

    </div>
  )
}

export default MovieInfo
