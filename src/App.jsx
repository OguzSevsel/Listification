import { React, useState } from "react";
import { DndContext, closestCorners } from "@dnd-kit/core";
import { SortableContext, rectSortingStrategy } from "@dnd-kit/sortable";
import "./App.sass";

import MovieCard from "./components/MoviesList/MovieCard/MovieCard";

function App() {

  const movieData = [
  {
    id:1,
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
  },
  {
    id:2,
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
  },
  {
    id:3,
    name: "Hello Darling How Are You Hello Darling How Are You",
    director: "Christopher Nolan Christopher Nolan Christopher Nolan Christopher Nolan Christopher Nolan Christopher Nolan Christopher Nolan Christopher Nolan Christopher Nolan Christopher Nolan",
    actors: [
        { Name: "Leonardo", surName: "DiCaprio" },
        { Name: "Joseph", surName: "Gordon-Levitt" },
        { Name: "Elliot", surName: "Page" },
        { Name: "Leonardo", surName: "DiCaprio" },
        { Name: "Leonardo", surName: "DiCaprio" },
        { Name: "Leonardo", surName: "DiCaprio" },
        { Name: "Leonardo", surName: "DiCaprio" },
        { Name: "Leonardo", surName: "DiCaprio" },
        { Name: "Leonardo", surName: "DiCaprio" },
        { Name: "Leonardo", surName: "DiCaprio" },
        { Name: "Leonardo", surName: "DiCaprio" },
    ],
    genre: "Sci-Fi, Thriller",
    rating: "8.8/10",
    posterURL: "https://upload.wikimedia.org/wikipedia/en/1/18/Inception_OST.jpg",
    posterDef: "Inception Movie Poster",
    plot: "A thief who enters the dreams of others to steal secrets must plant an idea into someone's mind. A thief who enters the dreams of others to steal secrets must plant an idea into someone's mind. A thief who enters the dreams of others to steal secrets must plant an idea into someone's mind. A thief who enters the dreams of others to steal secrets must plant an idea into someone's mind. A thief who enters the dreams of others to steal secrets must plant an idea into someone's mind. A thief who enters the dreams of others to steal secrets must plant an idea into someone's mind. A thief who enters the dreams of others to steal secrets must plant an idea into someone's mind. A thief who enters the dreams of others to steal secrets must plant an idea into someone's mind."
  },
  {
    id:4,
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
  },
  {
    id:5,
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
  },
  {
    id:6,
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
  },
  {
    id:7,
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
  },
  {
    id:8,
    name: "BabyDriver",
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
  },
  {
    id:9,
    name: "BabyDriver",
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
  },
  {
    id:10,
    name: "BabyDriver",
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
  },
  {
    id:11,
    name: "BabyDriver",
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
  },
  {
    id:12,
    name: "BabyDriver",
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
  },
  {
    id:13,
    name: "BabyDriver",
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
  },
  {
    id:14,
    name: "BabyDriver",
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
  },
  {
    id:15,
    name: "BabyDriver",
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
  },
  {
    id:16,
    name: "BabyDriver",
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
  },
  {
    id:17,
    name: "BabyDriver",
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
  },
  {
    id:18,
    name: "BabyDriver",
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
  },
  {
    id:19,
    name: "BabyDriver",
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
  },
  {
    id:20,
    name: "BabyDriver",
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
  },


];

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

export default App
