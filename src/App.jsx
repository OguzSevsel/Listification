import { React } from "react";
import MovieListGridView from "./components/MoviesList/MovieCard/MovieListGridView";

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

  return (
      <MovieListGridView movieData={movieData}/>
  )
}

export default App
