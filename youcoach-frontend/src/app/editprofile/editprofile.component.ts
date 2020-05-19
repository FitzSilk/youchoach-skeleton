import {Component, OnInit} from '@angular/core';
import {User} from "../classes/user";
import {AuthenticationService} from "../authentication/authentication.service";
import {UserService} from "../services/user.service";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
  user: User;
  updateForm;
  formBuilder: FormBuilder;

  constructor(private authenticationService: AuthenticationService, private userService: UserService) {
    this.updateForm = this.formBuilder.group({
      firstName: '',
      lastName: '',
      email: ''
    });
  }

  ngOnInit(): void {
    this.getById();
  }

  getById(): void {
    const id = this.authenticationService.getId();
    this.userService.getUserById(id).subscribe(user => this.user = user);
  }

  onSubmit(updateData) {
    this.userService.updateUser(updateData)
      .subscribe();
  }

}
