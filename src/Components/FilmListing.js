import React, {Component} from 'react';
import FilmRow from './FilmRow';
import TMDB from '../TMDB';

class FilmListing extends Component {
  constructor(props){
    super(props);
    this.state = ({
      filter: "popular",
      list: []
    })
  }

  handleFilterClick(str){
    this.setState({
      filter: str
    })
    this.state.filter !== "inTheaters" ? this.filterFilmListing(this.state.filter) : this.nowPlaying()
    console.log(`setting filter to ${str}`)
  }

  filterFilmListing = (filter) =>{
    if(filter === "popular"){
      // call method in app that makes a call to api
      filter = this.state.list
      console.log(filter, "filter")
    } else {
      filter = this.props.faves
    }
    return filter.map((film) => 
      <FilmRow
        film={film}
        key={film.id}
        onFaveToggle={()=> this.props.onFaveToggle(film)}
        isFave={this.props.faves.includes(film)}
        details={this.props.details}
      /> 
    )
  }

  nowPlaying = () => {
    if(this.props.playing.length < 1){
      this.props.handleNowPlaying()
      console.log("here")
    }
    return this.props.playing.map((film) => 
      <FilmRow film={film}
        key={film.id}
        onFaveToggle={()=> this.props.onFaveToggle(film)}
        isFave={this.props.faves.includes(film)}
        details={this.props.details}
      />
    )
  }

  renderPopular = () => {
    this.props.getPopularFilms();
    return this.props.popular.map(film => 
      <FilmRow film={film}
        key={film.id}
        onFaveToggle={()=> this.props.onFaveToggle(film)}
        isFave={this.props.faves.includes(film)}
        details={this.props.details}
      />  
    )
  }

  render(){
    const popular = this.state.filter === "popular" ? "is-active" : "";
    const faves = this.state.filter === "faves" ? "is-active" : "";
    return(
      <div className="film-list">
        <div onClick={this.getPopularFilms}
          className={`film-list-filter ${popular}`}>
          POPULAR
          <span className="section-count">{this.props.films.length}</span>
        </div>
        <div onClick={()=> this.handleFilterClick('faves')} className={`film-list-filter ${faves}`}>
          FAVES
          <span className="section-count">{this.props.faves.length}</span>
        </div>
        <div onClick={()=> this.handleFilterClick('inTheaters')} className="film-list-filter">
          NOW PLAYING
          <span className="section-count">{this.props.playing.length}</span>
        </div>
          <h1 className="section-title">FILMS</h1>
            {this.state.filter !== "inTheaters" ? this.filterFilmListing(this.state.filter) : this.state.filter === "popular" ? this.renderPopular() : this.nowPlaying()}
      </div>
    );
  }
}

export default FilmListing;
