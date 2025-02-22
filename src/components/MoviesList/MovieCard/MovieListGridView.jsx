import { React, useState } from "react";
import { DndContext, closestCorners } from "@dnd-kit/core";
import { SortableContext, rectSortingStrategy } from "@dnd-kit/sortable";
import MovieCard from "./MovieCard";
import "./MovieListGridView.sass";

function MovieListGridView({movieData}) {

    const [movies, setMovies] = useState(movieData)

    const handleDragEnd = (event) => {
      const { active, over } = event;
    
      // Only reorder if the active and over items are different
      if (active.id !== over.id) {
        const oldIndex = movies.findIndex((movie) => movie.id === active.id);
        const newIndex = movies.findIndex((movie) => movie.id === over.id);
    
        const updatedMovies = [...movies];
        updatedMovies.splice(oldIndex, 1);
        updatedMovies.splice(newIndex, 0, movies[oldIndex]);
    
        setMovies(updatedMovies);
      }
    };
    
      return (
    
        <div className="Background">
        <div className="grid-wrapper">
          <div className="grid">
            <DndContext 
            collisionDetection={closestCorners}
            onDragEnd={handleDragEnd}>
              <SortableContext items={movies} strategy={rectSortingStrategy}>
                {movies.map((movie) => (
                  <MovieCard key={movie.id} id={movie.id} className={"movieCard"} name={movie.name} director={movie.director} genre={movie.genre} rating={movie.rating} posterURL={movie.posterURL}
                  posterDef={movie.posterDef} plot={movie.plot} actors={movie.actors}/>
                ))}
              </SortableContext>
            </DndContext>
          </div>
        </div>
      </div>
    
    )
}

export default MovieListGridView;
