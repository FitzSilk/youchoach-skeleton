import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';
import {User} from '../classes/user';
import {SecuredUser} from '../classes/secureduser';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  error;
  success;
  registerForm;
  @Input()
  users: User[];

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) {
    this.registerForm = this.formBuilder.group({
      firstName: '',
      lastName: '',
      email: '',
      securedUser: this.formBuilder.group(({
        password: ''
      }))
    });
  }

  ngOnInit(): void {
  }

  onSubmit(userData) {

    this.success = false;
    this.error = false;
    userData.securedUser.username = userData.email;
    this.userService.saveUser(userData).subscribe(user => this.users.push(user));
    this.registerForm.reset();
  }
}
