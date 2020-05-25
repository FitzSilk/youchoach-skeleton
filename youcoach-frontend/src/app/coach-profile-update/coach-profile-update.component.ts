import {Component, OnInit} from '@angular/core';
import {User} from '../classes/user';
import {AuthenticationService} from '../authentication/authentication.service';
import {UserService} from '../services/user.service';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';

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
              private router: Router) {
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
    console.log(updateData);
    this.user.coach = updateData;
    this.userService.updateCoach(this.user);
  }

  loadUser() {
    const id: string = this.authenticationService.getId();
    this.userService.getUserById(id).subscribe(user => {
      this.user = user;
      this.fillTheForm();
    });
  }

}
