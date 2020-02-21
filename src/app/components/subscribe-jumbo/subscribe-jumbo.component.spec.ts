import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeJumboComponent } from './subscribe-jumbo.component';

describe('SubscribeJumboComponent', () => {
  let component: SubscribeJumboComponent;
  let fixture: ComponentFixture<SubscribeJumboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscribeJumboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribeJumboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
