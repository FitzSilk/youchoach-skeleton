import {Component, Input, OnInit} from '@angular/core';
import {User} from '../classes/user';
import {MyprofileComponent} from '../myprofile/myprofile.component';

@Component({
  selector: 'app-myprofile-view',
  templateUrl: './myprofile-view.component.html',
  styleUrls: ['./myprofile-view.component.css']
})
export class MyprofileViewComponent implements OnInit {

  @Input()
  user: User;

  constructor(private myprofileComponent: MyprofileComponent) {
}

  ngOnInit(): void {
      this.user = this.myprofileComponent.user;
  }


}
