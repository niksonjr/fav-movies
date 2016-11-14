import React from 'react';
import CategoryTitle from './category-title';
import Movies from '../containers/movies';
import MovieDetails from '../containers/movie-details';
import { categoryTypes } from '../constants';

const App = () => (
    <div>
        <section className="container">
            <CategoryTitle title="All Movies" />
            <Movies types={[categoryTypes.FAVOURITE]} />
        </section>

        <section className="container">
            <CategoryTitle title="Favourity Movies" />
            <Movies types={[categoryTypes.ALL, categoryTypes.FAVOURITE]} category={categoryTypes.FAVOURITE} />
        </section>

        <MovieDetails />
    </div>
);

export default App;
