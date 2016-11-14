import { actions } from '../constants';
import expect from 'expect';

import movies from '../reducers/movies';
import selectedMovie from '../reducers/selected-movie';

const reducersSpecs = () => {
    const testData = [
        {
            input: undefined,
            method: 'toBe',
            output: null
        },
        {
            input: null,
            method: 'toBe',
            output: null
        },
        {
            input: 1,
            method: 'toBe',
            output: 1
        },
        {
            input: 2,
            method: 'toNotBe',
            output: '2'
        }
    ];

    testData.forEach(testCaseData => {
        expect(
            selectedMovie(testCaseData.input, actions.SELECT_MOVIE)
        )[testCaseData.method](testCaseData.output);
    });

    console.log('Reducers specs: PASSED');
};

export default reducersSpecs;
