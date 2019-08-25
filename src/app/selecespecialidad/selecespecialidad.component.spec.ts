import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecespecialidadComponent } from './selecespecialidad.component';

describe('SelecespecialidadComponent', () => {
  let component: SelecespecialidadComponent;
  let fixture: ComponentFixture<SelecespecialidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelecespecialidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecespecialidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
