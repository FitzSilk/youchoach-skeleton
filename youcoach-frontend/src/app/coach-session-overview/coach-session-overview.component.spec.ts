import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachSessionOverviewComponent } from './coach-session-overview.component';

describe('CoachSessionOverviewComponent', () => {
  let component: CoachSessionOverviewComponent;
  let fixture: ComponentFixture<CoachSessionOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachSessionOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachSessionOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
