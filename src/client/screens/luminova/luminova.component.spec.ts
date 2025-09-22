import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuminovaComponent } from './luminova.component';

describe('LuminovaComponent', () => {
  let component: LuminovaComponent;
  let fixture: ComponentFixture<LuminovaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LuminovaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LuminovaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
