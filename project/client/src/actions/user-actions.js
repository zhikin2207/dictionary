import * as types from './action-types';
import firebase from 'firebase';

export const userSignInSuccess = (displayName, uid) => ({
    type: types.USER_SIGN_IN_SUCCESS,
    displayName: displayName,
    uid: uid
});

export const userSignOutSuccess = () => ({
    type: types.USER_SIGN_OUT_SUCCESS
});

export const signIn = () => {
    return dispatch => {
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider).then(result => {
            const user = result.user;

            dispatch(userSignInSuccess(user.displayName, user.uid));
        }).catch(error => {
            // TODO: An error happened.
        }); 
    };
};

export const signOut = () => {
    return dispatch => {
        firebase.auth().signOut().then(() => {
            dispatch(userSignOutSuccess());
        }).catch(error => {
            // TODO: An error happened.
        });
    };
};

export const verifyAuth = () => {
    return dispatch => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                dispatch(userSignInSuccess(user.displayName, user.uid));
            } else {
                dispatch(userSignOutSuccess());
            }
        });
    };
};