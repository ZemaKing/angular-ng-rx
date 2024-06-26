import {createReducer, on} from '@ngrx/store';

import {decrement, increment, set} from './counter.actions';

const initialState: number = 0;

export const counterReducer = createReducer(
	initialState,
	on(increment, (state: number, action) => state + action.value),
	on(decrement, (state: number, action) => state - action.value),
	on(set, (state, action) => action.value),
);

// export function counterReducer(state = initialState) {
// 	return state;
// }
