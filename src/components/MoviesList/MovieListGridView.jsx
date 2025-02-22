import { React, useState } from "react";
import { DndContext, closestCorners } from "@dnd-kit/core";
import { SortableContext, rectSortingStrategy } from "@dnd-kit/sortable";
import MovieCard from "./MovieCard/MovieCard";
import "./MovieListGridView.sass";
import Dropdown from "../Buttons/CreateListButton/Dropdown";

function MovieListGridView() {

    const [movies, setMovies] = useState([]);

    const movieData = 
    {
        name: "Inception",
        director: "Christopher Nolan",
        actors: [
            { Name: "Leonardo", surName: "DiCaprio" },
            { Name: "Joseph", surName: "Gordon-Levitt" },
            { Name: "Elliot", surName: "Page" }
        ],
        genre: "Sci-Fi, Thriller",
        rating: "8.8/10",
        posterURL: "https://upload.wikimedia.org/wikipedia/en/1/18/Inception_OST.jpg",
        posterDef: "Inception Movie Poster",
        plot: "A thief who enters the dreams of others to steal secrets must plant an idea into someone's mind."
    };

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

    const addMovie = () => {
      const newMovie = {
        id: movies.length + 1,
        ...movieData,
      };
  
      setMovies([...movies, newMovie]);
    }
    
      return (
    
        <div className="grid-wrapper">
          <div className="grid">
            <DndContext 
            collisionDetection={closestCorners}
            onDragEnd={handleDragEnd}>
              <SortableContext items={movies} strategy={rectSortingStrategy}>
                {movies.map((movie) => (
                  <MovieCard key={movie.id} id={movie.id} className={"movieCard movieCardStyle"} name={movie.name} director={movie.director} genre={movie.genre} rating={movie.rating} posterURL={movie.posterURL}
                  posterDef={movie.posterDef} plot={movie.plot} actors={movie.actors}/>
                ))}
                <Dropdown onClick={addMovie} buttonText={"Add Movie"}/>
              </SortableContext>
            </DndContext>
          </div>
        </div>
    
    )
}

export default MovieListGridView;
