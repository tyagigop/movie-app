// {
//     type : 'ADD MOVIES'
// }

export const ADD_MOVIES='ADD_MOVIES';
export const ADD_FAVOURITES='ADD_FAVOURITES';
export const REMOVE_FROM_FAVOURITES='REMOVE_FROM_FAVOURITES';
export const SET_SHOW_FAVOURITES='SET_SHOW_FAVOURITES';

export function addMovies(movies){
    return {
      type: 'ADD_MOVIES',
      movies
    }
}

export function addFavourites(movie){
    return {
      type: 'ADD_FAVOURITES',
      movie
    }
}
export function removeFavourites(movie){
    return {
      type: 'REMOVE_FROM_FAVOURITES',
      movie
    }
}
export function showFavourites(show){
    return {
      type: SET_SHOW_FAVOURITES,
      show
    }
}