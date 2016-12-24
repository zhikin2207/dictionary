import React from 'react';
import {Route, IndexRoute} from 'react-router';
import firebase from 'firebase';

import App from './components/app';
import HomePage from './components/home/home-page';
import WordsPage from './components/word/words-page';
import SigninPage from './components/auth/signin-page';
import SignoutPage from './components/auth/signout-page';

import RequireAuth from './components/auth/require-auth';

export default (
    <Route path="/" component={App} onEnter={performAuth}>
        <IndexRoute component={HomePage} />
        <Route path="/words" component={RequireAuth(WordsPage)} />
        <Route path="/signin" component={SigninPage} />
        <Route path="/signout" component={SignoutPage} />
    </Route>
);

function performAuth(nextState, replace, callback) {
    firebase.auth().onAuthStateChanged(function() { callback(); });
}
