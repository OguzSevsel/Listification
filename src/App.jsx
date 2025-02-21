import { React, useState } from "react";
import { DndContext, closestCorners } from "@dnd-kit/core";
import { SortableContext, useSortable, rectSortingStrategy } from "@dnd-kit/sortable";
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
    id:1,
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
          <SortableContext items={movies.map((movie) => movie.id)} strategy={rectSortingStrategy}>
            {movies.map((movie) => (
              <SortableMovieCard key={movie.id} id={movie.id} movieData={movie} />
            ))}
          </SortableContext>
        </DndContext>
      </div>
    </div>
  </div>
      
  )
}


function SortableMovieCard({ id, movieData }) {
  const { attributes, listeners, setNodeRef } = useSortable({ id });

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className="movieCard"
      style={{ cursor: "move" }}
    >
      <MovieCard {...movieData} />
    </div>
  );
}

export default App
