import React, {Component} from 'react';
import FilmRow from './FilmRow';

class FilmListing extends Component {
  constructor(props){
    super(props);
    this.state = ({
      filter: "all"
    })
  }

  handleFilterClick(str){
    this.setState(prevState => ({
      filter: str
    }))
    console.log(`setting filter to ${str}`)
  }

  filterFilmListing(filter){
    filter === "all" ? filter = this.props.films :
    filter === "inTheaters" ? filter = this.props.playing : 
    filter = this.props.faves
    return filter.map((film) => {
      return <FilmRow
        film={film}
        key={film.id}
        onFaveToggle={()=> this.props.onFaveToggle(film)}
        isFave={this.props.faves.includes(film)}
        details={this.props.details}
        />
      }
    )
  }

  render(){
    const all = this.state.filter === "all" ? "is-active" : "";
    const faves = this.state.filter === "faves" ? "is-active" : "";
    return(
      <div className="film-list">
        <div onClick={()=> this.handleFilterClick('all')}
          className={`film-list-filter ${all}`}>
          ALL
          <span className="section-count">{this.props.films.length}</span>
        </div>
        <div onClick={()=> this.handleFilterClick('faves')} className={`film-list-filter ${faves}`}>
          FAVES
          <span className="section-count">{this.props.faves.length}</span>
        </div>
          <h1 className="section-title">FILMS</h1>
            {this.filterFilmListing(this.state.filter)}
      </div>
    );
  }
}

export default FilmListing;
