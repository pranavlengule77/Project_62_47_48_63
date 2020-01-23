import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptionHomeComponent } from './reception-home.component';

describe('ReceptionHomeComponent', () => {
  let component: ReceptionHomeComponent;
  let fixture: ComponentFixture<ReceptionHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceptionHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceptionHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
