import createReducer from '../../utils/createReducer.js'
import { API_SPLASH } from '../../config.js';

export const LOAD_SPLASH_REQUEST = 'LOAD_SPLASH_REQUEST';
export const LOAD_SPLASH_SUCCESS = 'LOAD_SPLASH_SUCCESS';
export const LOAD_SPLASH_FAILURE = 'LOAD_SPLASH_FAILURE';
export const FINISH_SPLASH = 'FINISH_SPLASH';

export const splash = createReducer(null, {
    [LOAD_SPLASH_REQUEST](state, action) {
        return state;
    },
    [LOAD_SPLASH_SUCCESS](state, action) {
        const { img, text } = action.json;
        return Object.assign({}, state, {
            img,
            text
        });
    },
    [LOAD_SPLASH_FAILURE](state, action) {
        return state;
    },
    [FINISH_SPLASH](state, action) {
        return Object.assign({}, state, {
            splashed: true
        })
    }
});

export function loadSplash(Id) {
    return {
        types: [LOAD_SPLASH_REQUEST, LOAD_SPLASH_SUCCESS, LOAD_SPLASH_FAILURE],
        shouldCallAPI: (state) => !state.splash,
        callAPI: () => fetch(API_SPLASH),
        payload: {Id}
    };
}

export function finishSplash() {
    return {
        type: FINISH_SPLASH
    }
}