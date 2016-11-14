import React from 'react';

const MovieInfo = ({ movie }) => {
    if (!movie) {
        return null;
    }

    return (
        <div className="item-details">
            <h2>Details for <strong>{movie.title}</strong></h2>
            <div>Release Date: {movie.year}</div>
            <div>Directed by: {movie.director}</div>
        </div>
    );
};

export default MovieInfo;
