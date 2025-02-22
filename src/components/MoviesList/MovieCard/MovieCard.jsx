import React from "react";
import "./MovieCard.sass";

import { useSortable } from "@dnd-kit/sortable";
import {CSS} from '@dnd-kit/utilities';


const MovieCard = ({ id, name, director, actors, genre, rating, posterURL, posterDef, plot, className }) => {

    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({id: id});
    
    const style = {
        transition,
        transform: CSS.Transform.toString(transform),
    }

    return (
        <div
            ref={setNodeRef}
            {...attributes}
            {...listeners}
            className={className}
            style={style}
        >
            <div className="movieDir">
                <h1 className="movieName">{name}</h1>
                <h2>Director</h2>
                <p>{director}</p>
                
                <h2>Actors</h2>
                {
                    actors.map((actor, index) => (
                        <p key={index} className="movieActor">{actor.Name} {actor.surName}</p>
                    ))
                }

            </div>
            <img className="moviePoster" src={posterURL} alt={posterDef} />

            <div className="movieInfo">

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

        </div>
    );

};

export default MovieCard;