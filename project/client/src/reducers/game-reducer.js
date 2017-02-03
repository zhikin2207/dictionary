import initialState from './initial-state';
import * as types from '../actions/action-types';
import {GameStatus} from '../config';

export default function(state = initialState.game, action) {
    switch(action.type) {
        case types.GAME_LOAD_WORDS_SUCCESS:
            return Object.assign({}, state, { words: action.words });
        case types.GAME_NEXT_WORD:
            return Object.assign({}, state, { index: state.index + 1 });
        case types.GAME_SET_CORRECT_ANSWER:
            return Object.assign({}, state, { 
                words: [
                    ...state.words.slice(0, state.index),
                    Object.assign({}, state.words[state.index], { answerCorrect: true }),
                    ...state.words.slice(state.index + 1)
                ],
                correctCount: state.correctCount + 1
            });
        case types.GAME_SET_WRONG_ANSWER:
            return Object.assign({}, state, { 
                words: [
                    ...state.words.slice(0, state.index),
                    Object.assign({}, state.words[state.index], { answerCorrect: false }),
                    ...state.words.slice(state.index + 1)
                ],
                wrongCount: state.wrongCount + 1
            });
        case types.GAME_START:
            return Object.assign({}, state, { status: GameStatus.InProgress });
        case types.GAME_END:
            return Object.assign({}, state, { status: GameStatus.Completed });
    }

    return state;
}