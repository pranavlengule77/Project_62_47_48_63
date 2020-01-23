import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModPatientComponent } from './mod-patient.component';

describe('ModPatientComponent', () => {
  let component: ModPatientComponent;
  let fixture: ComponentFixture<ModPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
