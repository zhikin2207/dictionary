import {combineReducers} from 'redux';
import dictionary from './dictionary-reducer';
import user from './user-reducer';
import {reducer as form} from 'redux-form';

const rootReducer = combineReducers({
    form,
    dictionary,
    user
});

export default rootReducer;
