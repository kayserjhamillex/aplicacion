import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaPaso2Component } from './reserva-paso2.component';

describe('ReservaPaso2Component', () => {
  let component: ReservaPaso2Component;
  let fixture: ComponentFixture<ReservaPaso2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservaPaso2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservaPaso2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
