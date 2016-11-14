import { actions } from '../constants';
import { includes, filter } from 'lodash';
const DEFAULT_STATE = null;

const selectedMovie = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case actions.SELECT_MOVIE:
            return state === action.id ? DEFAULT_STATE : action.id;
        default:
            return state;
    }
}

export default selectedMovie;
