import React from 'react';
import FilmDeetsTrue from './FilmDeetsTrue';
import FilmDeetsFalse from './FilmDeetsFalse';

function FilmDetails(props){
  let details = props.film.id ? <FilmDeetsTrue film={props.film}/> : <FilmDeetsFalse />
  return(
      <div className="film-details">
        <h1 className="section-title">Details</h1>
       {details}
      </div>
  );
}

export default FilmDetails;
