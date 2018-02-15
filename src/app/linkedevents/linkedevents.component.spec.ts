import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedeventsComponent } from './linkedevents.component';

describe('LinkedeventsComponent', () => {
  let component: LinkedeventsComponent;
  let fixture: ComponentFixture<LinkedeventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkedeventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkedeventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
