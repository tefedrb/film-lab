import React from 'react';
import FilmPoster from './FilmPoster';
import Fave from './Fave';

function FilmRow(props){
  const releaseYear = new Date(props.film.release_date).getFullYear();
  return(
    <div onClick={()=>props.details(props.film)} className="film-row">
      <FilmPoster poster={props.film.poster_path}/>
      <div className="film-summary">
        <h1>TITLE</h1>
        <h2>{props.film.title}</h2>
        <h2>YEAR:</h2>
        <p>{releaseYear}</p>
      </div>
      <Fave onFaveToggle={props.onFaveToggle} isFave={props.isFave}/>
    </div>
  );
}

export default FilmRow;