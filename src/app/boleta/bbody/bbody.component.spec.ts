import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BbodyComponent } from './bbody.component';

describe('BbodyComponent', () => {
  let component: BbodyComponent;
  let fixture: ComponentFixture<BbodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BbodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
