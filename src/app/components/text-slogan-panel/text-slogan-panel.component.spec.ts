import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextSloganPanelComponent } from './text-slogan-panel.component';

describe('TextSloganPanelComponent', () => {
  let component: TextSloganPanelComponent;
  let fixture: ComponentFixture<TextSloganPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextSloganPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextSloganPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
