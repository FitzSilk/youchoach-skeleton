import {Component, Input, OnInit} from '@angular/core';
import {User} from '../classes/user';
import {CoachProfileComponent} from '../coach-profile/coach-profile.component';

@Component({
  selector: 'app-coach-topic-update',
  templateUrl: './coach-topic-update.component.html',
  styleUrls: ['./coach-topic-update.component.css']
})
export class CoachTopicUpdateComponent implements OnInit {

  @Input()
  user: User;

  constructor(public coachProfileComponent: CoachProfileComponent) {
  }

  ngOnInit(): void {
    this.user = this.coachProfileComponent.user;
  }

}
