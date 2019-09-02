import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaPaso6Component } from './reserva-paso6.component';

describe('ReservaPaso6Component', () => {
  let component: ReservaPaso6Component;
  let fixture: ComponentFixture<ReservaPaso6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservaPaso6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservaPaso6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
