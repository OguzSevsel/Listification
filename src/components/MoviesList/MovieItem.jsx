import React from "react";

const MovieItem = ({name, director, actors, genre, rating, posterURL, posterDef, plot, className}) => {

    return (
        <div className={className}>
            <h1 className="movieName">{name}</h1>
            <h2 className="movieDirector">{director}</h2>
            {
                actors.map((actor, index) => (
                    <h3 key={index} className="movieActor">{actor.Name} {actor.surName}</h3>
                ))
            }
            <p className="movieGenre">{genre}</p>
            <p className="movieRating">{rating}</p>
            <img className="moviePoster" src={posterURL} alt={posterDef} />
            <p className="moviePlot">{plot}</p>
        </div>
    );

}

export default MovieItem;