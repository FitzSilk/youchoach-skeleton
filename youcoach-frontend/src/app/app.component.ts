import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from './authentication/authentication.service';
import {TranslateService} from '@ngx-translate/core';
import {UserService} from './services/user.service';
import {User} from './classes/user';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  username;
  language = 'en';
  user: User;

  constructor(private authenticationService: AuthenticationService, private translate: TranslateService, private userService: UserService) {
  }

  ngOnInit(): void {
    this.username = this.authenticationService.getUsername();
    this.authenticationService.userLoggedIn$.subscribe(_ => {
      this.username = this.authenticationService.getUsername();
    });
  }

  switchLanguage(language: string) {
    this.translate.use(language);
    this.language = language;
  }

  currentLanguage() {
    return this.language;
  }

  submitData() {
    this.userService.getUserByUsername(this.username).subscribe(user => this.user = user);
    console.log(this.user);
  }
}
