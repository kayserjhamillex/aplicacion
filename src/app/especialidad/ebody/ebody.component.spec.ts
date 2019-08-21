import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EbodyComponent } from './ebody.component';

describe('EbodyComponent', () => {
  let component: EbodyComponent;
  let fixture: ComponentFixture<EbodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EbodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
