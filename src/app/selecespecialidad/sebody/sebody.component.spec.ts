import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SebodyComponent } from './sebody.component';

describe('SebodyComponent', () => {
  let component: SebodyComponent;
  let fixture: ComponentFixture<SebodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SebodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SebodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
