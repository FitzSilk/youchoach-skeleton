import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../authentication/authentication.service';
import {SessionService} from '../services/session.service';
import {UserService} from '../services/user.service';
import {User} from '../classes/user';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Session} from '../classes/session';

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css']
})
export class CreateSessionComponent implements OnInit {
  error;
  success;
  user: User;
  coach: User;
  createSession;
  submitted = false;

  constructor(private authenticationService: AuthenticationService,
              private sessionService: SessionService,
              private userService: UserService,
              private formBuilder: FormBuilder,
              private router: Router) {
    this.createSession = this.formBuilder.group({
      subject: ['', Validators.required],
      description: '',
      location: ['', [Validators.required]],
      date: this.formBuilder.group({
        calendar: ['', Validators.required],
        time: ['', Validators.required]
      }),
      coachee: this.user,
      coach: this.coach
    });
  }

  ngOnInit(): void {
    this.loadUser();
  }

  loadUser(): void {
    const id: string = this.authenticationService.getId();
    this.userService.getUserById(id).subscribe(user => this.user = user);
  }

  onSubmit(sessionData) {
    this.submitted = true;
    // stop here if form is invalid
    if (this.createSession.invalid) {
      return;
    }
    this.success = false;
    this.error = false;
    const date = sessionData.date.calendar + sessionData.date.time;
    console.log(date);
    const session = new Session(sessionData.subject, sessionData.description, sessionData.location, sessionData.date, this.user, this.coach);
    this.sessionService.createSession(sessionData).subscribe(user => this.router.navigate(['/home']));
    this.createSession.reset();
  }

}
