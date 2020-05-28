import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../authentication/authentication.service';
import {SessionService} from '../services/session.service';
import {UserService} from '../services/user.service';
import {User} from '../classes/user';
import {FormBuilder, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
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
              private router: Router,
              private route: ActivatedRoute) {
    this.createSession = this.formBuilder.group({
      subject: ['', Validators.required],
      description: '',
      location: ['', [Validators.required]],
      date: this.formBuilder.group({
        calendar: ['', Validators.required],
        time: ['', Validators.required]
      })
    });
  }

  ngOnInit(): void {
    this.loadUser();
    this.loadCoach();
  }

  loadUser(): void {
    const id: string = this.authenticationService.getId();
    this.userService.getUserById(id).subscribe(user => this.user = user);
  }

  loadCoach(): void {
    const coachId: string = this.route.snapshot.paramMap.get('id');
    this.userService.getUserById(coachId).subscribe(user => this.coach = user);
  }

  onSubmit(sessionData) {
    this.submitted = true;
    // stop here if form is invalid
    if (this.createSession.invalid) {
      return;
    }
    this.success = false;
    this.error = false;
    const timing = sessionData.date.calendar + 'T' + sessionData.date.time + ':00.000Z';
    const session = new Session(sessionData.subject,
      sessionData.description,
      sessionData.location,
      timing,
      this.user,
      this.coach,
      'PENDING');
    this.sessionService.createSession(session).subscribe(user => this.router.navigate(['/user/myprofile/' + this.user.id]));
    this.createSession.reset();
  }

}
