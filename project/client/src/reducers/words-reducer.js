import * as types from '../actions/action-types';
import initialState from './initial-state';

export default function(state = initialState.words, action) {
    switch(action.type) {
        case types.WordsLoaded:
            return action.words;
    }

    return state;
}
