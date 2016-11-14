import { actions } from '../constants';
import { cloneDeep, findIndex, includes, filter } from 'lodash';

const movies = (state = [], action) => {
    switch (action.type) {
        case actions.TOGGLE_CATEGORY:
            let newCategoryIndex;
            let newState = state.map((item, idx) => {
                if (item.id !== action.id) {
                    return item;
                }

                let categories = item.categories;

                if (!includes(categories, action.category)) {
                    categories.push(action.category);
                    newCategoryIndex = idx;
                }
                else {
                    categories = filter(categories, c => c !== action.category);
                }

                return Object.assign({}, item, { categories });
            });

            // move to back of array if new category. splice can be used here because it mutates a copy of the state
            if (newCategoryIndex !== undefined) {
                newState.push(newState.splice(newCategoryIndex, 1)[0])
            }

            return newState;
        case actions.REORDER_FAVOURITES:
            let copyState = cloneDeep(state);

            const targetElmIdx = findIndex(copyState, item => item.id === action.position);
            const movedElmIdx = findIndex(copyState, item => item.id === action.id);
            copyState.splice(targetElmIdx, 0, copyState.splice(movedElmIdx, 1)[0]);

            return copyState;
        default:
            return state;
    }
}

export default movies;
