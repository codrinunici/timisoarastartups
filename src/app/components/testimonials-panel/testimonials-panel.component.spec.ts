import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialsPanelComponent } from './testimonials-panel.component';

describe('TestimonialsPanelComponent', () => {
  let component: TestimonialsPanelComponent;
  let fixture: ComponentFixture<TestimonialsPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestimonialsPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonialsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
