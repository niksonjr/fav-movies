import { combineReducers } from 'redux';
import movies from './movies';
import selectedMovie from './selected-movie';

const moviesApp = combineReducers({
    movies,
    selectedMovie
});

export default moviesApp;
