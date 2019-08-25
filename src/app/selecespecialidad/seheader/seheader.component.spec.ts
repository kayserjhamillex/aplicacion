import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeheaderComponent } from './seheader.component';

describe('SeheaderComponent', () => {
  let component: SeheaderComponent;
  let fixture: ComponentFixture<SeheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
