import * as types from './action-types';
import WordService from '../firebase/word-service';

const wordService = new WordService();

export const wordsLoadStart = () => ({
    type: types.WORDS_LOAD_START
});

export const wordsLoadSuccess = (words) => ({
    type: types.WORDS_LOAD_SUCCESS,
    words: words
});

export const wordRemoveSuccess = (key) => ({
    type: types.WORD_REMOVE_SUCCESS,
    key: key
});

export const wordUpdateSuccess = (word) => ({
    type: types.WORD_UPDATE_SUCCESS,
    word: word
});

export const wordAddSuccess = (word) => ({
    type: types.WORD_ADD_SUCCESS,
    word: word
});

export const wordEditStart = (key) => ({
    type: types.WORD_EDIT_START,
    key: key
});

export const wordEditCancel = () => ({
    type: types.WORD_EDIT_CANCEL
});

export const load = () => {
    return dispatch => {
        dispatch(wordsLoadStart());

        wordService.getAll().then(words => {
            dispatch(wordsLoadSuccess(words.reverse()));
        });
    };
};

export const add = (word) => {
    return dispatch => {
        wordService.add(word).then((wordKey) => {
            dispatch(wordAddSuccess(Object.assign({}, word, { key: wordKey })));
        });
    };
};

export const remove = (key) => {
    return dispatch => {
        wordService.remove(key).then(() => {
            dispatch(wordRemoveSuccess(key));
        });
    };
};

export const update = (word) => {
    return dispatch => {
        wordService.update(word).then(() => {
            dispatch(wordUpdateSuccess(word));
            dispatch(wordEditCancel());
        });
    };
};