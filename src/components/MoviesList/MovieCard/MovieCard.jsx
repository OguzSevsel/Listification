import React from "react";
import "./MovieCard.sass";

const MovieCard = ({name, director, actors, genre, rating, posterURL, posterDef, plot, className}) => {

    return (
        <div className={className}>
            <div className="movieDir">
                <div className="movieDirUp">
                    <h1 className="movieName">{name}</h1>
                    <h2 >Director</h2>
                    <p >{director}</p>
                </div>
                
                <div className="movieDirBot">
                   <h2>Actors</h2>
                    {
                    actors.map((actor, index) => (
                        <p key={index} className="movieActor">{actor.Name} {actor.surName}</p>
                    ))
                    }
                </div>
                
            </div>
            <img className="moviePoster" src={posterURL} alt={posterDef} />
            
            <div className="movieInfo">

                <div className="movieInfoLeft">
                    <div className="movieGenre">
                        <p>Genre <br />{genre}</p>
                    </div>

                    <div className="movieRating">
                        <p>IMDB Rating <br/>{rating}</p>
                    </div>
                    <button className="mustWatch">
                        Add to Must Watch
                    </button>
                </div>

               
                
                <div className="movieInfoRight">
                    <p className="moviePlot">{plot}</p>
                </div>

            </div>
            
        </div>
    );

}

export default MovieCard;