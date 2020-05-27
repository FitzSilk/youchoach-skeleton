import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachProfilePublicViewComponent } from './coach-profile-public-view.component';

describe('CoachProfilePublicViewComponent', () => {
  let component: CoachProfilePublicViewComponent;
  let fixture: ComponentFixture<CoachProfilePublicViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachProfilePublicViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachProfilePublicViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
