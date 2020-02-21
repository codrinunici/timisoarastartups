import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupJoinPanelComponent } from './group-join-panel.component';

describe('GroupJoinPanelComponent', () => {
  let component: GroupJoinPanelComponent;
  let fixture: ComponentFixture<GroupJoinPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupJoinPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupJoinPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
