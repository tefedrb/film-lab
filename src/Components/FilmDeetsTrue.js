import React from 'react';

function FilmDeetsTrue(props){
    const {backdrop_path, poster_path, vote_average, vote_count, spoken_languages} = props.film;
    const backdropUrl = `https://image.tmdb.org/t/p/w1280/${backdrop_path}`
    const posterUrl = `https://image.tmdb.org/t/p/w780/${poster_path}`
    console.log(props, "<----- PROPS")
    return (
        <div className="film-detail is-hydrated">
            <figure className="film-backdrop">
                <img src={backdropUrl} alt="" />
                <h1 className="film-title">{props.film.title}</h1>
            </figure>

            <div className="film-meta">
                <h2 className="film-tagline">{props.film.tagline}</h2>
                <p className="film-detail-overview">
                <img src={posterUrl} className="film-detail-poster" alt={props.film.title} />
                {props.film.overview}
                </p>
            </div>
            <div>
                <div>Language: {spoken_languages.map((lan, key) => <p key={key}>{lan.name}</p>)}</div>
                <p>Average User Score: {vote_average}</p>
                <p>Votes: {vote_count}</p>
            </div>
        </div> 
    )
}

export default FilmDeetsTrue;


