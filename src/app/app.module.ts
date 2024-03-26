import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import {AppComponent} from './app.component';
import {CounterOutputComponent} from './counter-output/counter-output.component';
import {CounterControlsComponent} from './counter-controls/counter-controls.component';
import {CounterEffects} from './store/counter.effects';
import {counterReducer} from './store/counter.reducer';

@NgModule({
	declarations: [
		AppComponent,
		CounterOutputComponent,
		CounterControlsComponent,
	],
	imports: [
		BrowserModule,
		StoreModule.forRoot({
			counter: counterReducer,
		}, {}),
		EffectsModule.forRoot([CounterEffects]),
		StoreDevtoolsModule.instrument({logOnly: true}),
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
