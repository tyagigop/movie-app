import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import {legacy_createStore } from 'redux';
import movies from './reducers';


const store= legacy_createStore(movies);
console.log(store);
console.log("state",store.getState());

// store.dispatch({
//         type: 'ADD MOVIES',
//         movies: [{name: 'superman'}]
// })
// console.log("state",store.getState());


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
