import * as types from '../actions/action-types';
import initialState from './initial-state';

export default function(state = initialState.dictionary, action) {
    switch(action.type) {
        case types.WORDS_LOAD_SUCCESS:
            return Object.assign({}, state, { words: action.words });
        case types.WORD_REMOVE_SUCCESS: {
            const index = state.words.findIndex(word => word.key === action.key);

            return Object.assign({}, state, { words: [
                ...state.words.slice(0, index),
                ...state.words.slice(index + 1)
            ]});
        }
        case types.WORD_EDIT_START:
            return Object.assign({}, state, { editKey: action.key });
        case types.WORD_EDIT_CANCEL:
            return Object.assign({}, state, { editKey: '' });
        case types.WORD_UPDATE_SUCCESS: {
            const index = state.words.findIndex(word => word.key === action.word.key);

            return Object.assign({}, state, { words: [
                ...state.words.slice(0, index),
                Object.assign({}, state.words[index], action.word),
                ...state.words.slice(index + 1)
            ]});
        }
        case types.WORD_ADD_SUCCESS:
            return Object.assign({}, state, { words: [
                action.word,
                ...state.words
            ]});
    }

    return state;
}
