import React, {Component} from 'react';
import FilmRow from './FilmRow';

class FilmListing extends Component {
  render(){
    const filmRows = this.props.films
      .map(film => <FilmRow film={film} key={film.id}/>)
    return(
      <div>
        <div className="film-library">
          <div className="film-list">
            <h1 className="section-title">FILMS</h1>
              {filmRows}
          </div>
        </div>
      </div>
    );
  }
}

export default FilmListing;
