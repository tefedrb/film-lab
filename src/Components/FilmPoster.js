import React from 'react';

function FilmPoster(props){
  return (
    <img src={`https://image.tmdb.org/t/p/w780/${props.poster}`} alt=""/>
  )
}

export default FilmPoster;
