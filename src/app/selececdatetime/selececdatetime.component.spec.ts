import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelececdatetimeComponent } from './selececdatetime.component';

describe('SelececdatetimeComponent', () => {
  let component: SelececdatetimeComponent;
  let fixture: ComponentFixture<SelececdatetimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelececdatetimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelececdatetimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
