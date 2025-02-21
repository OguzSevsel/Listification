import React from "react";
import "./MovieCard.sass";
import {useDraggable} from '@dnd-kit/core';

const MovieCard = ({ name, director, actors, genre, rating, posterURL, posterDef, plot, className }) => {

    const {attributes, listeners, setNodeRef, transform} = useDraggable({
        id: 'draggable',
      });

      const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      } : undefined;

    return (
        <div  
        ref={setNodeRef}
        className={className}
        >
            <div className="movieDir">
                <div className="movieDirUp">
                    <h1 className="movieName">{name}</h1>
                    <h2>Director</h2>
                    <p>{director}</p>
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
                        <p>{genre}</p>
                    </div>

                    <div className="movieRating">
                        <p>IMDB <br/>{rating}</p>
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