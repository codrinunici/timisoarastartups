import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStartupsComponent } from './admin-startups.component';

describe('AdminStartupsComponent', () => {
  let component: AdminStartupsComponent;
  let fixture: ComponentFixture<AdminStartupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminStartupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminStartupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
