import {combineReducers} from 'redux';
import dictionary from './dictionary-reducer';
import user from './user-reducer';
import game from './game-reducer';
import {reducer as form} from 'redux-form';

const rootReducer = combineReducers({
    form,
    dictionary,
    user,
    game
});

export default rootReducer;
