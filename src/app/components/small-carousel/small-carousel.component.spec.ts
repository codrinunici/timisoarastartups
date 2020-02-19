import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallCarouselComponent } from './small-carousel.component';

describe('SmallCarouselComponent', () => {
  let component: SmallCarouselComponent;
  let fixture: ComponentFixture<SmallCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
