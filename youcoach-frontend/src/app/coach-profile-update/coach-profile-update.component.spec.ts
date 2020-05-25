import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachProfileUpdateComponent } from './coach-profile-update.component';

describe('CoachProfileUpdateComponent', () => {
  let component: CoachProfileUpdateComponent;
  let fixture: ComponentFixture<CoachProfileUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachProfileUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachProfileUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
