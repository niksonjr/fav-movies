import { actions } from '../constants';
import expect from 'expect';

import { selectMovie, toggleCategory, reorderFavourites } from '../actions';

const actionsSpecs = () => {
    const selectMovieTestData = [
        {
            input: 1,
            method: 'toEqual',
            output: 1
        },
        {
            input: '2',
            method: 'toEqual',
            output: 2
        },
        {
            input: '3',
            method: 'toNotEqual',
            output: '3'
        }
    ];
    const toggleCategoryTestData = [
        {
            input: { id: 1, category: 'favourite' },
            method: 'toEqual',
            output: { id: 1, category: 'favourite' }
        },
        {
            input: { id: 2, category: 'favourite' },
            method: 'toEqual',
            output: { id: 2, category: 'favourite' }
        },
        {
            input: { id: '3', category: 'favourite' },
            method: 'toNotEqual',
            output: { id: '3', category: 'favourite' }
        }
    ];
    const reorderFavouritesData = [
        {
            input: { id: 1, position: 2 },
            method: 'toEqual',
            output: { id: 1, position: 2 }
        },
        {
            input: { id: 2, position: 2 },
            method: 'toEqual',
            output: { id: 2, position: 2 }
        },
        {
            input: { id: '5', position: 3 },
            method: 'toEqual',
            output: { id: 5, position: 3 }
        },
        {
            input: { id: '7', position: '7' },
            method: 'toNotEqual',
            output: { id: '7', position: '7' }
        }
    ];

    selectMovieTestData.forEach(testCaseData => {
        expect(
            selectMovie(testCaseData.input)
        )[testCaseData.method]({
            type: actions.SELECT_MOVIE,
            id: testCaseData.output
        });
    });

    toggleCategoryTestData.forEach(testCaseData => {
        expect(
            toggleCategory(testCaseData.input.id, testCaseData.input.category)
        )[testCaseData.method]({
            type: actions.TOGGLE_CATEGORY,
            ...testCaseData.output
        });
    });

    reorderFavouritesData.forEach(testCaseData => {
        expect(
            reorderFavourites(testCaseData.input.id, testCaseData.input.position)
        )[testCaseData.method]({
            type: actions.REORDER_FAVOURITES,
            ...testCaseData.output
        });
    });

    console.log('Action specs: PASSED');
};

export default actionsSpecs;
