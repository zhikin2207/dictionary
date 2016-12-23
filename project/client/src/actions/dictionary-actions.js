import {browserHistory} from 'react-router';
import * as types from './action-types';
import firebase from 'firebase';

export const wordsLoaded = (words) => ({ 
    type: types.WORDS_LOADED,
    words: words
});

export const wordRemoved = (key) => ({
    type: types.WORD_REMOVED,
    key: key
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
        const database = firebase.database();
        const uid = firebase.auth().currentUser.uid;

        database.ref(`users/${uid}/words/`).once('value').then(function(snapshot) {
            const wordsObject = snapshot.val();
            const words = Object
                .keys(wordsObject)
                .map(key => Object.assign({}, wordsObject[key], { key:key }));

            dispatch(wordsLoaded(words));
        });
    };
};

export const add = (word) => {
    return dispatch => {
        const database = firebase.database();
        const uid = firebase.auth().currentUser.uid;

        const wordRef = database.ref(`users/${uid}/words`).push();
        wordRef.set(word).then(function() {
            browserHistory.push('/words');
        });
    };
};

export const remove = (key) => {
    return dispatch => {
        const database = firebase.database();
        const uid = firebase.auth().currentUser.uid;

        database.ref(`users/${uid}/words/${key}`).remove().then(function() {
            dispatch(wordRemoved(key));
        });
    };
};
