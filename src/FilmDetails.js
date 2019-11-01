import React from 'react';

function FilmDetails(props){
  console.log(props, "<--- props")
  return(
    <div>
      <div className="film-details">
        <h1 className="section-title">Details</h1>
      </div>
    </div>
  );
}

export default FilmDetails;
