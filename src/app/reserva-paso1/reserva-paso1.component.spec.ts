import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaPaso1Component } from './reserva-paso1.component';

describe('ReservaPaso1Component', () => {
  let component: ReservaPaso1Component;
  let fixture: ComponentFixture<ReservaPaso1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservaPaso1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservaPaso1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
