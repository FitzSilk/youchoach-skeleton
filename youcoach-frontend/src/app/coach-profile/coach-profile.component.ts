import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from '../classes/user';
import {UserService} from '../services/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../authentication/authentication.service';
import {Coach} from '../classes/coach';

@Component({
  selector: 'app-coach-profile',
  templateUrl: './coach-profile.component.html',
  styleUrls: ['./coach-profile.component.css']
})
export class CoachProfileComponent implements OnInit, OnDestroy {
  user: User;
  coach: Coach;
  roleAdmin = 'ADMIN';

  constructor(private userService: UserService, private route: ActivatedRoute,
              private authenticationService: AuthenticationService, private router: Router) {
  }

  ngOnInit(): void {
    this.getById();

    $('footer').removeClass(['yellow', 'darken-2']).addClass(['teal', 'lighten-3']);
  }

  ngOnDestroy(): void {
    $('footer').removeClass(['teal', 'lighten-3']).addClass(['yellow', 'darken-2']);
  }

  getById(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (this.authenticationService.getRole() !== this.roleAdmin && id !== this.authenticationService.getId()) {
      this.router.navigate(['/404']).then();
    }
    this.userService.getUserById(id).subscribe(user => this.user = user);
  }

}
