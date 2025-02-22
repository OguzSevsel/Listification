import React from 'react'

function MovieDirectorandActors({movieName, className, actors, director}) {
  return (
    
    <div className={className}>
        <h1 className="movieName style font">{movieName}</h1>
        <h2 className='style font'>Director</h2>
        <li className='director style font'>{director}</li>
        
        <h2 className='style font'>Actors</h2>
        {
            actors.map((actor, index) => (
                <li key={index} className="movieActor style font">{actor.Name} {actor.surName}</li>
            ))
        }
    </div>
  )
}

export default MovieDirectorandActors
