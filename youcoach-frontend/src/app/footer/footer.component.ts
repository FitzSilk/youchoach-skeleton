import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../authentication/authentication.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  username: string;

  constructor(private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
    this.username = this.authenticationService.getUsername();
    $('footer').removeClass(['teal', 'lighten-3']).addClass(['yellow', 'darken-2']);
  }

}
