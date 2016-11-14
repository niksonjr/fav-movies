import { actions } from '../constants';

const PARSE_RADIX = 10;

export const selectMovie = (id) => ({
    type: actions.SELECT_MOVIE,
    id: parseInt(id, PARSE_RADIX)
});

export const toggleCategory = (id, category) => ({
    type: actions.TOGGLE_CATEGORY,
    id: parseInt(id, PARSE_RADIX),
    category: category
});

export const reorderFavourites = (id, position) => ({
    type: actions.REORDER_FAVOURITES,
    id: parseInt(id, PARSE_RADIX),
    position: parseInt(position, PARSE_RADIX)
});
