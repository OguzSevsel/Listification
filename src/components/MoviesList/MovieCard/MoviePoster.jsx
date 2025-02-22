import React from 'react'

function MoviePoster({className, posterURL, posterDef}) {
  return (
    <img className={className} src={posterURL} alt={posterDef} />
  )
}

export default MoviePoster
