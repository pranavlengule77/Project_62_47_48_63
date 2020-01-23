import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyCarouselComponent } from './body-carousel.component';

describe('BodyCarouselComponent', () => {
  let component: BodyCarouselComponent;
  let fixture: ComponentFixture<BodyCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
