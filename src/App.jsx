import { React } from "react";
import "./App.sass";

import MovieCard from "./components/MoviesList/MovieCard/MovieCard";

function App() {

  const movieData = {
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

  return (
    <>

      <div className="Background">

        <div className="grid-wrapper">

          <div className="grid">

          <MovieCard 
              {...movieData} className="movieCard"
            />

            <MovieCard 
              {...movieData} className="movieCard"
            />

            <MovieCard 
              {...movieData} className="movieCard"
            />

            <MovieCard 
              {...movieData} className="movieCard"
            />
        
            <MovieCard 
              {...movieData} className="movieCard"
            />

            <MovieCard 
              {...movieData} className="movieCard"
            />

            <MovieCard 
              {...movieData} className="movieCard"
            />

<MovieCard 
              {...movieData} className="movieCard"
            />

<MovieCard 
              {...movieData} className="movieCard"
            />

<MovieCard 
              {...movieData} className="movieCard"
            />

<MovieCard 
              {...movieData} className="movieCard"
            />

          </div>

            

        </div>
    
    </div>
      
    </>
  )
}

export default App
