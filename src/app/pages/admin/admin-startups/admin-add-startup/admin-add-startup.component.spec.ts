import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddStartupComponent } from './admin-add-startup.component';

describe('AdminAddStartupComponent', () => {
  let component: AdminAddStartupComponent;
  let fixture: ComponentFixture<AdminAddStartupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAddStartupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddStartupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
