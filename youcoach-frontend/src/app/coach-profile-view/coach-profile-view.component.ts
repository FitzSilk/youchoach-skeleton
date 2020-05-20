import {Component, Input, OnInit} from '@angular/core';
import {User} from '../classes/user';
import {CoachProfileComponent} from '../coach-profile/coach-profile.component';
import {Coach} from '../classes/coach';

@Component({
  selector: 'app-coach-profile-view',
  templateUrl: './coach-profile-view.component.html',
  styleUrls: ['./coach-profile-view.component.css']
})
export class CoachProfileViewComponent implements OnInit {

  @Input() user: User;
  @Input() coach: Coach;

  topicOneValues: string[];
  topicTwoValues: string[];

  constructor(public coachProfileComponent: CoachProfileComponent) {
  }

  ngOnInit(): void {
    this.user = this.coachProfileComponent.user;
    this.coach = this.coachProfileComponent.user.coach;

    this.setTopicValues();
  }

  setTopicValues(): void {
    if (this.coach.classesForFirstTopic !== null) {
      this.topicOneValues = this.coach.classesForFirstTopic.split(',');
    }

    if (this.user.coach.classesForSecondTopic !== null) {
      this.topicTwoValues = this.user.coach.classesForSecondTopic.split(',');
    }
  }


}
