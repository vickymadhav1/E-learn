import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableCourcesComponent } from './available-cources.component';

describe('AvailableCourcesComponent', () => {
  let component: AvailableCourcesComponent;
  let fixture: ComponentFixture<AvailableCourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailableCourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableCourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
