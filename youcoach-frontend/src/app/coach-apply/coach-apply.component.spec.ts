import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachApplyComponent } from './coach-apply.component';

describe('CoachApplyComponent', () => {
  let component: CoachApplyComponent;
  let fixture: ComponentFixture<CoachApplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachApplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachApplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
