import * as types from './action-types';
import firebase from 'firebase';

export const signInSuccess = (displayName, uid) => ({
    type: types.USER_SIGNED_IN,
    displayName: displayName,
    uid: uid
});

export const signOutSuccess = () => ({
    type: types.USER_SIGNED_OUT
});

export const signIn = () => {
    return dispatch => {
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider).then(function(result) {
            const user = result.user;

            dispatch(signInSuccess(user.displayName, user.uid));
        }).catch(function(error) {
            // TODO: An error happened.
        }); 
    };
};

export const signOut = () => {
    return dispatch => {
        firebase.auth().signOut().then(function() {
            dispatch(signOutSuccess());
        }, function(error) {
            // TODO: An error happened.
        });
    };
};

export const verifyAuth = () => {
    return dispatch => {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                dispatch(signInSuccess(user.displayName, user.uid));
            } else {
                dispatch(signOutSuccess());
            }
        });
    };
};