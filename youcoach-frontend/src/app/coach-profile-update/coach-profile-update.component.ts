import {Component, OnInit} from '@angular/core';
import {User} from '../classes/user';
import {AuthenticationService} from '../authentication/authentication.service';
import {UserService} from '../services/user.service';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {CoachProfileComponent} from '../coach-profile/coach-profile.component';

@Component({
  selector: 'app-coach-profile-update',
  templateUrl: './coach-profile-update.component.html',
  styleUrls: ['./coach-profile-update.component.css']
})
export class CoachProfileUpdateComponent implements OnInit {

  user: User;
  updateForm;

  constructor(private authenticationService: AuthenticationService,
              private userService: UserService,
              private formBuilder: FormBuilder,
              private router: Router,
              public coachProfileComponent: CoachProfileComponent) {
  }

  ngOnInit(): void {
    this.loadUser();
  }

  fillTheForm() {
    this.updateForm = this.formBuilder.group({
      introduction: this.user.coach.informations,
      availability: this.user.coach.availability,
    });

  }

  onSubmit(updateData) {
    this.user.coach.availability = updateData.availability;
    this.user.coach.informations = updateData.introduction;
    this.coachProfileComponent.user.coach.informations = this.user.coach.informations;
    this.coachProfileComponent.user.coach.availability = this.user.coach.availability;
    this.userService.updateCoach(this.user).subscribe();
    this.coachProfileComponent.switchView('main');
  }

  loadUser() {
    const id: string = this.authenticationService.getId();
    this.userService.getUserById(id).subscribe(user => {
      this.user = user;
      this.fillTheForm();
    });
  }

}
