import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SdheaderComponent } from './sdheader.component';

describe('SdheaderComponent', () => {
  let component: SdheaderComponent;
  let fixture: ComponentFixture<SdheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SdheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SdheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
