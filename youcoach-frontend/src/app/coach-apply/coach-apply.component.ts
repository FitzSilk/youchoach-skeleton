import {Component, Input, OnInit} from '@angular/core';
import {User} from '../classes/user';
import {MyprofileComponent} from '../myprofile/myprofile.component';

@Component({
  selector: 'app-coach-apply',
  templateUrl: './coach-apply.component.html',
  styleUrls: ['./coach-apply.component.css']
})
export class CoachApplyComponent implements OnInit {


  @Input()
  user: User;

  constructor(private myprofileComponent: MyprofileComponent) {
  }

  ngOnInit(): void {
    this.user = this.myprofileComponent.user;
  }

}
