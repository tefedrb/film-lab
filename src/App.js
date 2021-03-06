import React, { Component } from 'react';
import FilmListing from './Components/FilmListing';
import FilmDetails from './Components/FilmDetails';
import TMDB from './TMDB';

/* TODO:
  1.9.21 - Working on a Top 25 component
  - Filter top rated so that vote_count is accounted for
*/
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      // Need to return each object from
      allFilms: TMDB.films,
      faves: [],
      playing: [],
      popular: [],
      current: {}
    }
  }

  handleNowPlaying = () => {
    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${TMDB.api_key}`
    fetch(url)
    .then(res => res.json())
    .then(async res => {
      // Attach filmdetails to res
      // const hold = await this.handleDetailsClick(696374);
      console.log(res, "res")
      return res
    })
    .then(res => {
      this.setState({
        playing: res.results
      })
    })
  }

  getFilmDetails = () => {

  }

  getPopularFilms = () => {
    const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${TMDB.api_key}&language=en-US&page=1`
    fetch(url)
    .then(res => res.json())
    .then(res => {
      console.log(res, "res")
      console.log(res, "popular")
      this.setState({
        popular: res.results
      })
    })
  }

  handleFaveToggle = (film) => {
    const faves = this.state.faves.slice(0);
    const filmIndex = faves.indexOf(film);

    if(filmIndex < 0){
      console.log(`Adding ${film.title} to faves...`);
      faves.push(film);
    } else {
      console.log(`Removing ${film.title} from faves...`);
      faves.splice(filmIndex, 1);
    }
    this.setState({faves})
  }

  handleDetailsClick = (film, row = false) => {
    const url = `https://api.themoviedb.org/3/movie/${film.id}?api_key=${TMDB.api_key}&append_to_response=videos,images&language=en`
    fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data, "<-- data")
      if(row){
        this.setState({current: data})
      } else return data;
    })
  }

  render() {
    return (
      <div className="film-library">
        <FilmListing 
          details={this.handleDetailsClick} 
          films={this.state.allFilms} 
          faves={this.state.faves} 
          onFaveToggle={this.handleFaveToggle}
          handleNowPlaying={this.handleNowPlaying}
          playing={this.state.playing}
          getPopularFilms={this.getPopularFilms}
          popular={this.state.popular}
        />
        <FilmDetails film={this.state.current}/>
      </div>
    );
  }
}

export default App;
