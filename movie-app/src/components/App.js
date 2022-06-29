
import React from 'react'
// import './App.css';

import { data } from "../data";
import MovieCard from "./MovieCard";
import Navbar from "./Navbar";
import { addMovies,showFavourites } from '../actions';

class App extends React.Component{
  componentDidMount(){
      const {store}=this.props;
      store.subscribe(()=>{
        console.log('updated');
        this.forceUpdate();
        console.log('State',this.props.store.getState());

      })

    store.dispatch(addMovies(data));
    console.log('State',this.props.store.getState());
  }
  handleFavourite=(movie)=>{
    const {favourites}=this.props.store.getState();
    const index=favourites.indexOf(movie);
    if(index !==-1){
      return true;
    }
    return false;
  }
  onChangeTab=(val)=>{
    this.props.store.dispatch(showFavourites(val));
  }

  render(){
    console.log('render')
  const {list,favourites,showFavourites}=this.props.store.getState();
  const dis=showFavourites ? favourites:list;
  console.log(dis)
  return (
    <div className="App">
      <Navbar/>
      <div className="main">
        <div className="tabs">
          <div className={`tab ${showFavourites? '' : 'active-tabs'}`} onClick={()=>this.onChangeTab(false)}>Movies</div>

          <div className={`tab ${showFavourites? 'active-tabs' : ''}`} onClick={()=>this.onChangeTab(true)}>Favourites  {favourites.length===0?"":favourites.length} </div>
          
        </div>
        <div className="list">
          {dis.map((movie,index)=>(
            <MovieCard movie={movie}
             key={index}
             dispatch={this.props.store.dispatch}
             getstate={this.props.store.getState()}
             isFavourite={this.handleFavourite(movie)}

            />
          ))}
        </div>
        <div>
          {dis.length===0 ? <div className='no-movies'>no movie to display</div>: null}
        </div>
      

      </div>
    </div>
  );
}
}

export default App;
