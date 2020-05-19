import {Component, Input, OnInit} from '@angular/core';
import {User} from '../classes/user';
import {AuthenticationService} from '../authentication/authentication.service';
import {UserService} from '../services/user.service';
import {FormBuilder} from '@angular/forms';
import {MyprofileComponent} from '../myprofile/myprofile.component';


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
              private myprofileComponent: MyprofileComponent,
              private formBuilder: FormBuilder) {

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
      email: this.user.email
    });

  }

  onSubmit(updateData) {
    console.log(updateData);
    this.userService.updateUser(updateData)
      .subscribe();
  }

}
