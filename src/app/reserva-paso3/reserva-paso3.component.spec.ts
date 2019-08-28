import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaPaso3Component } from './reserva-paso3.component';

describe('ReservaPaso3Component', () => {
  let component: ReservaPaso3Component;
  let fixture: ComponentFixture<ReservaPaso3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservaPaso3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservaPaso3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
