import * as types from './action-types';
import WordsService from '../api/words-service';

const wordsService = new WordsService();

export const wordsLoaded = (words) => ({ 
    type: types.WordsLoaded,
    words: words
});

export const load = () => {
    return dispatch => {
        wordsService
            .getAll()
            .then(function(words) {
                dispatch(wordsLoaded(words));
            });
    };
};
