import createReducer from '../../utils/createReducer.js'
import { API_CONDITIONS } from '../../config.js';

export const LOAD_CONDITIONS_REQUEST = 'LOAD_CONDITIONS_REQUEST';
export const LOAD_CONDITIONS_SUCCESS = 'LOAD_CONDITIONS_SUCCESS';
export const LOAD_CONDITIONS_FAILURE = 'LOAD_CONDITIONS_FAILURE';

export const conditions = createReducer(null, {
    [LOAD_CONDITIONS_REQUEST](state, action) {
        return state;
    },
    [LOAD_CONDITIONS_SUCCESS](state, action) {
        return action.json;
    },
    [LOAD_CONDITIONS_FAILURE](state, action) {
        return state;
    }
});

export function loadConditions(Id) {
    return {
        types: [LOAD_CONDITIONS_REQUEST, LOAD_CONDITIONS_SUCCESS, LOAD_CONDITIONS_FAILURE],
        shouldCallAPI: (state) => !state.conditions,
        callAPI: () => fetch(API_CONDITIONS),
        payload: {Id}
    };
}
