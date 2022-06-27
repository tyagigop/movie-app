import React, { Component } from 'react'


export default class MovieCard extends Component {
  render() {
    const {movie}=this.props;
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
                <button className='favourite-btn'>Favourite</button>
            </div>
        </div>
        
      </div>
    )
  }
}
