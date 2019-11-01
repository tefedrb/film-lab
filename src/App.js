import React, { Component } from 'react';
import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';
import TMDB from './TMDB';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      // Need to return each object from
      films: TMDB.films.map(filmObj => {
        return {
          id: filmObj.id,
          title: filmObj.title,
          poster_path: filmObj.poster_path,
          backdrop_path: filmObj.backdrop_path,
          overview: filmObj.overview,
          release_date: filmObj.release_date,
        }
      })
    }
  }

  render() {
    return (
      <div>
        <FilmListing films={this.state.films} />
        <FilmDetails films={this.state.films} />
      </div>
    );
  }
}

export default App;
