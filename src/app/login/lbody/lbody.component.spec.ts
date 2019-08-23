import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LbodyComponent } from './lbody.component';

describe('LbodyComponent', () => {
  let component: LbodyComponent;
  let fixture: ComponentFixture<LbodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LbodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
