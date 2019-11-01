import React from 'react';

function FilmRow(props){
  console.log(props.film.poster_path)
  return(
    <div className="film-row">
      <img src={`https://image.tmdb.org/t/p/w780/${props.film.poster_path}`} alt=""/>
      <div className="film-summary">
        <h2>{props.film.title}</h2>
        <p>{props.film.release_date}</p>
      </div>
    </div>
  );
}

export default FilmRow;
