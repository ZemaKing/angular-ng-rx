import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({providedIn: 'root'})
export class CounterService {
	counter: number = 0;
	counterChanged: Subject<number> = new Subject<number>();

	increment(): void {
		this.counter++;
		this.counterChanged.next(this.counter)
	}

	decrement(): void {
		this.counter--;
		this.counterChanged.next(this.counter)
	}
}
