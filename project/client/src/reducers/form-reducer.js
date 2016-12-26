import * as types from '../actions/action-types';
import {reducer as formReducer} from 'redux-form';

export default formReducer.plugin({
    'new-word-form': (state, action) => {
        switch (action.type) {
            case types.WORD_ADD_SUCCESS:
                return undefined;
        }

        return state;
    }
});