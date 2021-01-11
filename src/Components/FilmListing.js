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
  }

  filterFilmListing = (filter) => {
    if(filter === "popular" || filter === "inTheaters") return this.apiCall()
    filter = this.props.faves;
    console.log(this.props.faves, "faves")
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

  apiCall = () => {
    if(this.props.playing.length < 1 && this.state.filter === "inTheaters"){
      this.props.handleNowPlaying()
    } else if (this.props.popular.length < 1 && this.state.filter === "popular"){
      this.props.getPopularFilms()
    }
    const films = this.state.filter === "inTheaters" ? this.props.playing : this.props.popular;
    return films.map((film) => 
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
        <div onClick={() => this.handleFilterClick('popular')}
          className={`film-list-filter ${popular}`}>
          TOP RATED
          <span className="section-count">{this.props.popular.length}</span>
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
            {this.filterFilmListing(this.state.filter)}
      </div>
    );
  }
}

export default FilmListing;
