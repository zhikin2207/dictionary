import * as types from '../actions/action-types';
import initialState from './initial-state';

export default function(state = initialState.user, action) {
    switch(action.type) {
        case types.USER_SIGN_IN_SUCCESS:
            return Object.assign({}, state, { authenticated: true, displayName: action.displayName, uid: action.uid });
        case types.USER_SIGN_OUT_SUCCESS:
            return Object.assign({}, state, { authenticated: false, displayName: '', uid: '' });
    }

    return state;
}