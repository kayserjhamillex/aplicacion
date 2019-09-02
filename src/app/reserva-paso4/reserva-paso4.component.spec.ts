import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaPaso4Component } from './reserva-paso4.component';

describe('ReservaPaso4Component', () => {
  let component: ReservaPaso4Component;
  let fixture: ComponentFixture<ReservaPaso4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservaPaso4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservaPaso4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
