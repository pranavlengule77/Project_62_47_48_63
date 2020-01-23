import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModDoctorComponent } from './mod-doctor.component';

describe('ModDoctorComponent', () => {
  let component: ModDoctorComponent;
  let fixture: ComponentFixture<ModDoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModDoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
