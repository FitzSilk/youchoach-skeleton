import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachProfileViewComponent } from './coach-profile-view.component';

describe('CoachProfileViewComponent', () => {
  let component: CoachProfileViewComponent;
  let fixture: ComponentFixture<CoachProfileViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachProfileViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachProfileViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
