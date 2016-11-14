import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/app';
import reducer from './reducers';
import { loadData, saveData } from './libs/local-storage';

import moviesList from './mocks/movies';

const savedMovieList = loadData('favMovieApp');
const initialData = savedMovieList ? savedMovieList : moviesList;

const store = createStore(
    reducer,
    initialData
);

store.subscribe(() => {
    saveData('favMovieApp', {
        movies: store.getState().movies
    })
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
