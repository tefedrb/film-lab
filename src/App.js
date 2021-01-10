import React, { Component } from 'react';
import FilmListing from './Components/FilmListing';
import FilmDetails from './Components/FilmDetails';
import TMDB from './TMDB';


/* TODO:
  1.9.21 - Working on a Top 25 component

*/
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      // Need to return each object from
      films: TMDB.films,
      faves: [],
      playing: [],
      current: {}
    }
  }

  handleNowPlaying = () => {
    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${TMDB.api_key}`
    fetch(url)
    .then(res => res.json())
    .then(res => {
      this.setState({
        playing: res.results
      })
    })
  }

  handleFaveToggle = (film) => {
    const faves = this.state.faves.slice(0);
    const filmIndex = this.state.faves.indexOf(film);

    if(filmIndex < 0){
      console.log(`Adding ${film.title} to faves...`);
      faves.push(film);
    } else {
      console.log(`Removing ${film.title} from faves...`);
      faves.splice(filmIndex, 1);
    }
    this.setState({faves})
  }

  handleDetailsClick = (film) => {
    const url = `https://api.themoviedb.org/3/movie/${film.id}?api_key=${TMDB.api_key}&append_to_response=videos,images&language=en`
    fetch(url)
    .then(res => {
      res.json()
      .then(data => {
        console.log(data, "<-- data")
        this.setState({current: data})
      })
    })
    this.setState({
      current: film
    })
    console.log(`Fetching details for ${film}`);
  }

  render() {
    return (
      <div className="film-library">
        <FilmListing details={this.handleDetailsClick} 
          films={this.state.films} 
          faves={this.state.faves} 
          onFaveToggle={this.handleFaveToggle}
          handleNowPlaying={this.handleNowPlaying}
          playing={this.state.playing}
        />
        <FilmDetails film={this.state.current}/>
      </div>
    );
  }
}

export default App;
