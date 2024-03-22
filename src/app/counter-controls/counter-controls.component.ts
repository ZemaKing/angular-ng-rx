import {Component} from '@angular/core';
import {Store} from '@ngrx/store';

import {decrement, increment} from '../store/counter.actions';

@Component({
	selector: 'app-counter-controls',
	templateUrl: './counter-controls.component.html',
	styleUrls: ['./counter-controls.component.css'],
})
export class CounterControlsComponent {
	constructor(private store: Store) {}

	increment(): void {
		this.store.dispatch(increment({value: 1}));
	}

	decrement(): void {
		this.store.dispatch(decrement({value : 1}));
	}
}
