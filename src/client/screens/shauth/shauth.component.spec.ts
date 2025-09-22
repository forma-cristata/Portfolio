import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SHAuthComponent } from './shauth.component';

describe('SHAuthComponent', () => {
  let component: SHAuthComponent;
  let fixture: ComponentFixture<SHAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SHAuthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SHAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
