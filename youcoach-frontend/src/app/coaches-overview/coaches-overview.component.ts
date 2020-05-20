import {Component, OnInit} from '@angular/core';
import {User} from "../classes/user";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-coaches-overview',
  templateUrl: './coaches-overview.component.html',
  styleUrls: ['./coaches-overview.component.css']
})
export class CoachesOverviewComponent implements OnInit {

  users: User[];

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.getCoaches();

  }


  getCoaches(): void {
    this.userService.getCoaches().subscribe(user => this.users = user);
  }

}
