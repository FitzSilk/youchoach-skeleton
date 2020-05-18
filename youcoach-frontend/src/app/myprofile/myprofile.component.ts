import {Component, Input, OnInit} from '@angular/core';
import {User} from '../classes/user';
import {UserService} from '../services/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../authentication/authentication.service';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
  user: User;
  roleAdmin = 'ADMIN';

  constructor(private userService: UserService, private route: ActivatedRoute,
              private authenticationService: AuthenticationService, private router: Router) {
  }

  ngOnInit(): void {
    this.getById();
  }

  getById(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (this.authenticationService.getRole() !== this.roleAdmin && id !== this.authenticationService.getId()) {
      this.router.navigate(['/404']).then();
    }
    this.userService.getUserById(id).subscribe(user => this.user = user);
  }

  /*getByName(): void {
    const userName = this.route.snapshot.paramMap.get('userName');
    this.userService.getUserByUsername(userName).subscribe(user => this.user = user);
  }*/

}
