import {Component, Input, OnInit} from '@angular/core';
import {User} from '../classes/user';
import {AuthenticationService} from '../authentication/authentication.service';
import {UserService} from '../services/user.service';
import {FormBuilder} from '@angular/forms';
import {MyprofileComponent} from '../myprofile/myprofile.component';
import {Router} from "@angular/router";


@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
  @Input()
  user: User;
  updateForm;

  constructor(private authenticationService: AuthenticationService,
              private userService: UserService,
              public myprofileComponent: MyprofileComponent,
              private formBuilder: FormBuilder,
              private router: Router) {
  }

  ngOnInit(): void {
    this.user = this.myprofileComponent.user;
    this.fillTheUser();
  }

  getById(): void {
    const id = this.authenticationService.getId();
    this.userService.getUserById(id).subscribe(user => this.user = user);
  }

  fillTheUser() {
    this.updateForm = this.formBuilder.group({
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      email: this.user.email,
      pictureUrl: this.user.pictureUrl
    });

  }

  onSubmit(updateData) {
    console.log(updateData);
    this.userService.updateUser(updateData)
      .subscribe(user => this.myprofileComponent.user = user);
    this.myprofileComponent.activeview = 'main';
  }


}
