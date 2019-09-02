import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaPaso5Component } from './reserva-paso5.component';

describe('ReservaPaso5Component', () => {
  let component: ReservaPaso5Component;
  let fixture: ComponentFixture<ReservaPaso5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservaPaso5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservaPaso5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
