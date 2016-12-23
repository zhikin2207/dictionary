/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import firebase from 'firebase';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css';
import configureStore from './store/configure-store';
import routes from './routes';
import firebaseConfig from './firebase/config.dev';
import * as userActions from './actions/user-actions';

const store = configureStore();
firebase.initializeApp(firebaseConfig);
store.dispatch(userActions.verifyAuth());

render (
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);
