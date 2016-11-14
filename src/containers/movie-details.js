import { connect } from 'react-redux';
import { find } from 'lodash';
import MovieInfo from '../components/movie-info';

const selectedMovie = (id, movies) => {
    if (id === null) {
        return;
    }

    return find(movies, m => m.id === id);
};

const mapStateToProps = (state, { category }) => ({
    movie: selectedMovie(state.selectedMovie, state.movies)
});

const MovieDetails = connect(
    mapStateToProps
)(MovieInfo);

export default MovieDetails;
