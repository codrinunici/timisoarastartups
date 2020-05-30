import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStartupFormComponent } from './admin-startup-form.component';

describe('AdminStartupFormComponent', () => {
  let component: AdminStartupFormComponent;
  let fixture: ComponentFixture<AdminStartupFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminStartupFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminStartupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
