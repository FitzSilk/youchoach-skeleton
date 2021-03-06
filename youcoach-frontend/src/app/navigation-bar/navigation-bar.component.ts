import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../authentication/authentication.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  username: string;
  role: string;
  language = 'en';
  id;

  constructor(private authenticationService: AuthenticationService, private translate: TranslateService) {
  }

  ngOnInit(): void {
    this.id = this.authenticationService.getId();
    this.username = this.authenticationService.getUsername();
    this.authenticationService.userLoggedIn$.subscribe(_ => {
      this.username = this.authenticationService.getUsername();
      this.id = this.authenticationService.getId();
      this.role = this.authenticationService.getRole();
    });
  }


  switchLanguage(language: string) {
    this.translate.use(language);
    this.language = language;
  }

  currentLanguage() {
    return this.language;
  }

  logout() {
    this.authenticationService.logout();
  }
}
