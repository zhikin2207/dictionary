import {combineReducers} from 'redux';
import dictionary from './dictionary-reducer';
import user from './user-reducer';
import form from './form-reducer';

const rootReducer = combineReducers({
    form,
    dictionary,
    user
});

export default rootReducer;
