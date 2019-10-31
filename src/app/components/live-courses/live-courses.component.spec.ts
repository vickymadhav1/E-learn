import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveCoursesComponent } from './live-courses.component';

describe('LiveCoursesComponent', () => {
  let component: LiveCoursesComponent;
  let fixture: ComponentFixture<LiveCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
