import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IbodyComponent } from './ibody.component';

describe('IbodyComponent', () => {
  let component: IbodyComponent;
  let fixture: ComponentFixture<IbodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IbodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
