import {Component, Input, OnInit} from '@angular/core';
import {User} from '../classes/user';
import {UserService} from '../services/user.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
  user: User;

  constructor(private userService: UserService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
   // this.getById();
  }

  getById(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.userService.getUserById(id).subscribe(user => this.user = user);
  }

  getByName(): void {
    const userName = this.route.snapshot.paramMap.get('userName');
    this.userService.getUserByUsername(userName).subscribe(user => this.user = user);
  }

}
