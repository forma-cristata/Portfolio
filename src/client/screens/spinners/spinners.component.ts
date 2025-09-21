import { Component } from '@angular/core';
import { WigglyBoiComponent } from './wiggly-boi/wiggly-boi.component';

@Component({
	selector: 'app-spinners',
	imports: [WigglyBoiComponent],
	templateUrl: './spinners.component.html',
	styleUrl: './spinners.component.scss',
})
export class SpinnersComponent {}
