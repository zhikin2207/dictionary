import {combineReducers} from 'redux';
import words from './words-reducer';
import { reducer as form } from 'redux-form';

const rootReducer = combineReducers({
    form,
    words
});

export default rootReducer;
