import React from "react";
import MovieInfo from "./MovieInfo";
import MovieDirectorandActors from "./MovieDirectorandActors";
import MoviePoster from "./MoviePoster";

import { useSortable } from "@dnd-kit/sortable";
import {CSS} from '@dnd-kit/utilities';

import "./MovieCard.sass";

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
            
            <MovieDirectorandActors  movieName={name} className={"movieDir"} actors={actors} director={director}/>

            <MoviePoster className={"moviePoster"} posterURL={posterURL} posterDef={posterDef}/>            

            <MovieInfo className="movieInfo" genre={genre} rating={rating} plot={plot}/>
            
        </div>
    );

};

export default MovieCard;