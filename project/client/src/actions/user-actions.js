import {browserHistory} from 'react-router';
import firebase from 'firebase';
import * as types from './action-types';

export const userSignInSuccess = (displayName, photoUrl, uid) => ({
    type: types.USER_SIGN_IN_SUCCESS,
    displayName: displayName,
    photoUrl: photoUrl,
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
            browserHistory.push('/');
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