import {Component, OnInit} from '@angular/core';
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
  activeview = 'main';

  constructor(private userService: UserService, private route: ActivatedRoute,
              private authenticationService: AuthenticationService, private router: Router) {
  }

  ngOnInit(): void {
    this.getById();
  }

  getById(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(this.authenticationService.getRole());
    if (this.authenticationService.getRole() !== this.roleAdmin && id !== this.authenticationService.getId()) {
      this.router.navigate(['/404']);
    }
    this.userService.getUserById(id).subscribe(user => this.user = user);
  }

  getByName(): void {
    const userName = this.route.snapshot.paramMap.get('userName');
    this.userService.getUserByUsername(userName).subscribe(user => this.user = user);
  }

  switchView(view: string) {
    this.activeview = view;
    const currentElement = '#' + view;
    $('.collection-item').removeClass(['black-text', 'active', 'yellow', 'darken-2'])
      .addClass(['grey-text', 'text-darken-2']);
    $(currentElement).removeClass(['grey-text', 'text-darken-2'])
      .addClass(['black-text', 'active', 'yellow', 'darken-2']);
  }
}
