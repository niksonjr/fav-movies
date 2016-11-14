import { connect } from 'react-redux';
import { filter, sortBy } from 'lodash';
import MoviesList from '../components/movies-list';
import { reorderFavourites, selectMovie, toggleCategory } from '../actions';

const visibleMovies = (movies, category) => {
    if (!category) {
        return sortBy(filter(movies, m => !m.categories.length), m => m.title);
    }

    return filter(movies, m => m.categories.indexOf(category) !== -1);
};

const mapStateToProps = (state, { category, types }) => ({
    movies: visibleMovies(state.movies, category),
    types: types
});

const mapDispatchToProps = dispatch => ({
    handleMovieClick: id => dispatch(selectMovie(id)),
    handleReorder: (id, position) => dispatch(reorderFavourites(id, position)),
    handleDrop: (id, category) => dispatch(toggleCategory(id, category))
});

const Movies = connect(
    mapStateToProps,
    mapDispatchToProps
)(MoviesList);

export default Movies;
