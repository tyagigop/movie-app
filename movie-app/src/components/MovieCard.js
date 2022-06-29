import React, { Component } from 'react'
import { addFavourites,removeFavourites } from '../actions';





export default class MovieCard extends Component {


  handleFavouriteClick=()=>{
    const {movie}=this.props;
    this.props.dispatch(addFavourites(movie));
  }
    handleunFavouriteClick=()=>{
          const {movie}=this.props;
          this.props.dispatch(removeFavourites(movie));
          
  }

  render() {
    const {movie,isFavourite}=this.props;
    return (
      <div className='movie-card'>
        <div className='left'> 
            <img alt='movie-card' src={movie.Poster}/>
        </div>
        <div className='right'>
            <div className='title'>{movie.Title}</div> 
            <div className='plot'>{movie.Plot}</div>  
            <div className='footer'>
                <div className='rating'>Imdb Ratting : {movie.imdbRating} /10</div> 
                {isFavourite?
                <button className='unfavourite-btn' onClick={this.handleunFavouriteClick}>UnFavourite</button>
                :<button className='favourite-btn' onClick={this.handleFavouriteClick}>Favourite</button>}
            </div>
        </div>
        
      </div>
    )
  }
}
