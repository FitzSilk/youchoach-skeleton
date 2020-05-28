import {AfterViewInit, Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../authentication/authentication.service';
import {UserService} from '../services/user.service';
import {ActivatedRoute} from '@angular/router';
import {User} from '../classes/user';
import {Coach} from '../classes/coach';
import * as M from 'materialize-css';

@Component({
  selector: 'app-coach-profile-public-view',
  templateUrl: './coach-profile-public-view.component.html',
  styleUrls: ['./coach-profile-public-view.component.css']
})
export class CoachProfilePublicViewComponent implements OnInit, AfterViewInit {
  publicCoach: User;
  coach: Coach;
  topicOneValues: string[];
  topicTwoValues: string[];

  constructor(private authenticationService: AuthenticationService, private userService: UserService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getCoachById();
  }

  ngAfterViewInit(): void {
    M.AutoInit();
  }

  getCoachById(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.userService.getUserById(id).subscribe(user => {
      this.publicCoach = user;
      this.setTopicValues();
    });
  }

  setTopicValues(): void {
    if (this.publicCoach.coach.classesForFirstTopic !== null) {
      this.topicOneValues = this.publicCoach.coach.classesForFirstTopic.split(',');
    }

    if (this.publicCoach.coach.classesForSecondTopic !== null) {
      this.topicTwoValues = this.publicCoach.coach.classesForSecondTopic.split(',');
    }
  }

}
