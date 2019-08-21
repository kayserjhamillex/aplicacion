import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NbodyComponent } from './nbody.component';

describe('NbodyComponent', () => {
  let component: NbodyComponent;
  let fixture: ComponentFixture<NbodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NbodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
