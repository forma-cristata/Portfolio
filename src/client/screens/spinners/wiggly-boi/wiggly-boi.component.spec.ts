import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WigglyBoiComponent } from './wiggly-boi.component';

describe('WigglyBoiComponent', () => {
	let component: WigglyBoiComponent;
	let fixture: ComponentFixture<WigglyBoiComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [WigglyBoiComponent]
		}).compileComponents();

		fixture = TestBed.createComponent(WigglyBoiComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});