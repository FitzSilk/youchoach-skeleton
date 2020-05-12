import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  error;
  success;
  registerForm;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) {
    this.registerForm = this.formBuilder.group({
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    });
  }

  ngOnInit(): void {
  }

  onSubmit(loginData) {
    this.success = false;
    this.error = false;
    // this.userService.
    this.registerForm.reset();
  }
}
