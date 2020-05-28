import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoacheeSessionOverviewComponent } from './coachee-session-overview.component';

describe('CoacheeSessionOverviewComponent', () => {
  let component: CoacheeSessionOverviewComponent;
  let fixture: ComponentFixture<CoacheeSessionOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoacheeSessionOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoacheeSessionOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
