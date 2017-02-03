import * as types from './action-types';
import WordService from '../firebase/word-service';
import WordsTransformationService from '../services/words-transformation-service';

const wordService = new WordService();

export const loadWordsSuccess = (words) => ({
    type: types.GAME_LOAD_WORDS_SUCCESS,
    words
});

export const startGameSuccess = () => ({
    type: types.GAME_START
});

export const endGame = () => ({
    type: types.GAME_END
});

export const nextWord = () => ({
    type: types.GAME_NEXT_WORD
});

export const setCorrectAnswer = () => ({
    type: types.GAME_SET_CORRECT_ANSWER
});

export const setWrongAnswer = () => ({
    type: types.GAME_SET_WRONG_ANSWER
});

export const startGame = () => {
    return dispatch => {
        wordService.getAll().then(words => {
            const wordsTransformationService = new WordsTransformationService(words);

            const gameWords = wordsTransformationService
                .randomizeTranslation()
                .getLast(20)
                .randomize()
                .words;

            dispatch(loadWordsSuccess(gameWords));
            dispatch(startGameSuccess());
        });
    };
};