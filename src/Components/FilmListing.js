import React, {Component} from 'react';
import FilmRow from './FilmRow';

class FilmListing extends Component {

  handleFilterClick(str){
    console.log(`setting filter to ${str}`)
  }

  render(){
    const filmRows = this.props.films
      .map(film => <FilmRow film={film} key={film.id}/>)
    return(
      <div>
        <div className="film-library">
          <div className="film-list">
          <div className="film-list-filter">
            ALL
            <span className="section-count">{this.props.films.length}</span>
          </div>
          <div onClick={()=> this.handleFilterClick('faves')} className="film-list-filter">
            FAVES
            <span className="section-count">0</span>
          </div>
            <h1 className="section-title">FILMS</h1>
              {filmRows}
          </div>
        </div>
      </div>
    );
  }
}

export default FilmListing;
