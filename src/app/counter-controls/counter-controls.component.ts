import {Component} from '@angular/core';

import {CounterService} from '../counter.service';

@Component({
	selector: 'app-counter-controls',
	templateUrl: './counter-controls.component.html',
	styleUrls: ['./counter-controls.component.css'],
})
export class CounterControlsComponent {
	constructor(private counterService: CounterService) {}

	increment(): void {
		this.counterService.increment();
	}

	decrement(): void {
		this.counterService.decrement();
	}
}
