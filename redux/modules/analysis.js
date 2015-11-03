import createReducer from '../../utils/createReducer.js'
import { API_CONDITIONS } from '../../config.js';

export const LOAD_CONDITIONS_REQUEST = 'LOAD_CONDITIONS_REQUEST';
export const LOAD_CONDITIONS_SUCCESS = 'LOAD_CONDITIONS_SUCCESS';
export const LOAD_CONDITIONS_FAILURE = 'LOAD_CONDITIONS_FAILURE';
export const FINISH_CONDITION = 'FINISH_CONDITION';
export const RESET_CONDITION = 'RESET_CONDITION';
export const SET_CURRENT_CONDITION = 'SET_CURRENT_CONDITION';

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

export const currentCondition = createReducer({position:0}, {
    [SET_CURRENT_CONDITION](state, action) {
        return Object.assign({},state,{position: action.position});
    }
});

export const finishedCondition = createReducer([], {
    [FINISH_CONDITION](state, action) {
        return [...state, action.position];
    },
    [RESET_CONDITION](state, action) {
        let index = state.indexOf(action.position);
        return [
            ...state.slice(0, index),
            ...state.slice(index)
        ];
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

export function finishCondition(position) {
    return {
        position,
        type: FINISH_CONDITION
    }
}

export function resetCondition(position) {
    return {
        position,
        type: RESET_CONDITION
    }
}

export function setCurrentCondition(position) {
    return {
        position,
        type: SET_CURRENT_CONDITION
    }
}