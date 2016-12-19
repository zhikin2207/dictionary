import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import HomePage from './components/home/home-page';
import NewWordPage from './components/word/new-word/new-word-page';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="/word-new" component={NewWordPage} />
    </Route>
);
