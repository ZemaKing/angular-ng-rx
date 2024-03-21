import {createReducer, on} from '@ngrx/store';

import {increment} from './counter.actions.rs';

const initialState: number = 0;

export const counterReducer = createReducer(
	initialState,
	on(increment, (state: number) => state + 1)
);

// export function counterReducer(state = initialState) {
// 	return state;
// }
