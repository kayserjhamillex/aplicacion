import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderReservaComponent } from './header-reserva.component';

describe('HeaderReservaComponent', () => {
  let component: HeaderReservaComponent;
  let fixture: ComponentFixture<HeaderReservaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderReservaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
