import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SdbodyComponent } from './sdbody.component';

describe('SdbodyComponent', () => {
  let component: SdbodyComponent;
  let fixture: ComponentFixture<SdbodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SdbodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SdbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
