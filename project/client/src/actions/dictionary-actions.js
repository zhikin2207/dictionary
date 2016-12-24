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

export const wordUpdated = (word) => ({
    type: types.WORD_UPDATED,
    word: word
});

export const wordAdded = (word) => ({
    type: types.WORD_ADDED,
    word: word
});

export const load = () => {
    return dispatch => {
        const database = firebase.database();
        const uid = firebase.auth().currentUser.uid;

        database.ref(`users/${uid}/words`).orderByChild('createdAt').once('value').then(function(snapshot) {
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
        const wordKey = wordRef.key;

        const createProps = {
            value: word.value,
            translation: word.translation,
            createdAt: new Date().getTime()
        };

        createProps.changedAt = createProps.createdAt;

        wordRef.set(createProps).then(function() {
            dispatch(wordAdded(Object.assign({}, word, { key: wordKey })));
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

export const update = (word) => {
    return dispatch => {
        const database = firebase.database();
        const uid = firebase.auth().currentUser.uid;

        const updateProps = {
            value: word.value,
            translation: word.translation,
            changedAt: new Date().getTime()
        };

        database.ref(`users/${uid}/words/${word.key}`).update(updateProps).then(function() {
            dispatch(wordUpdated(word));
            dispatch(wordEditCancel())
        });
    };
};