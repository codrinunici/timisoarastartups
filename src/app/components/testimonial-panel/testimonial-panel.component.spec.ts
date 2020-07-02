import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialPanelComponent } from './testimonial-panel.component';

describe('TestimonialPanelComponent', () => {
  let component: TestimonialPanelComponent;
  let fixture: ComponentFixture<TestimonialPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestimonialPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonialPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
