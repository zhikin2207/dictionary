import {GameStatus} from '../config';

export default {
    dictionary: {
        editKey: '',
        words: [],
        loading: false
    },
    user: {
        authenticated: false,
        uid: '',
        displayName: '',
        photoUrl: ''
    },
    game: {
        words: [],
        index: 0,
        status: GameStatus.New,
        correctCount: 0,
        wrongCount: 0
    }
};
