import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {UserService} from '../services/user.service';
import {User} from '../classes/user';
import {SecuredUser} from '../classes/secureduser';
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
  @Input()
  users: User[];

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      securedUser: this.formBuilder.group({
        password: ['', Validators.required, Validators.minLength(8)],
        confirmPassword: ['', Validators.required]
      })
    });
  }

  ngOnInit(): void {
  }

  onSubmit(userData) {
    const secUser = new SecuredUser(userData.email, userData.securedUser.password, 0);
    const newUser = new User(userData.firstName, userData.lastName, userData.email, secUser);
    this.success = false;
    this.error = false;
    this.userService.saveUser(newUser).subscribe(user => this.router.navigate(['/home']));
    this.registerForm.reset();
  }

  checkPasswordsMatch(): void {
    const password = this.registerForm.get('securedUser.password');
    console.log(password);
    const confirmPassword = this.registerForm.get('securedUser.confirmPassword');
    console.log(confirmPassword);
    if (password.value !== confirmPassword.value) {
      this.registerForm.get('securedUser.confirmPassword').setErrors({notSame: true});
    }
  }

}
