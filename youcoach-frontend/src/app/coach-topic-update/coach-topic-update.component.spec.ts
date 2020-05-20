import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachTopicUpdateComponent } from './coach-topic-update.component';

describe('CoachTopicUpdateComponent', () => {
  let component: CoachTopicUpdateComponent;
  let fixture: ComponentFixture<CoachTopicUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachTopicUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachTopicUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
