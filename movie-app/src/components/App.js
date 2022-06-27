
import React from 'react'
// import './App.css';

import { data } from "../data";
import MovieCard from "./MovieCard";
import Navbar from "./Navbar";

class App extends React.Component{
  componentDidMount(){
      const {store}=this.props;
      store.subscribe(()=>{
        console.log('updated');
        this.forceUpdate();

      })

    store.dispatch({
      type: 'ADD MOVIES',
      movies: data
    });
    console.log('State',this.props.store.getState());
  }
  render(){
    console.log('render')
  const movies=this.props.store.getState();
  return (
    <div className="App">
      <Navbar/>
      <div className="main">
        <div className="tabs">
          <div className="tab">Movies</div>
          <div className="tab">Favourites</div>
        </div>
        <div className="list">
          {movies.map((movie,index)=>(
            <MovieCard movie={movie} key={index}/>
          ))}
        </div>

      </div>
    </div>
  );
}
}

export default App;
