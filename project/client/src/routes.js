import React from 'react';
import {Route, IndexRoute} from 'react-router';
import firebase from 'firebase';

import App from './components/app';
import HomePage from './components/home/home-page';
import SigninPage from './components/auth/signin-page';
import SignoutPage from './components/auth/signout-page';
import WordsPage from './components/word/words-page';
import GamesPage from './components/games/games-page';

import YesNoGamePage from './components/games/yes-no-game/yes-no-game-page';

import RequireAuth from './components/auth/require-auth';

export default (
    <Route path="/" component={App} onEnter={performAuth}>
        <IndexRoute component={HomePage} />
        <Route path="/signin" component={SigninPage} />
        <Route path="/signout" component={SignoutPage} />
        <Route path="/words" component={RequireAuth(WordsPage)} />
        <Route path="/games" component={RequireAuth(GamesPage)} />
        <Route path="/games/yes-no" component={RequireAuth(YesNoGamePage)} />
    </Route>
);

function performAuth(nextState, replace, callback) {
    firebase.auth().onAuthStateChanged(function() { callback(); });
}
