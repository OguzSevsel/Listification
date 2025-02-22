import React from 'react'

function MovieDirectorandActors({movieName, className, actors, director}) {
  return (
    
    <div className={className}>
        <h1 className="movieName">{movieName}</h1>
        <h2>Director</h2>
        <p>{director}</p>
        
        <h2>Actors</h2>
        {
            actors.map((actor, index) => (
                <p key={index} className="movieActor">{actor.Name} {actor.surName}</p>
            ))
        }
    </div>
  )
}

export default MovieDirectorandActors
