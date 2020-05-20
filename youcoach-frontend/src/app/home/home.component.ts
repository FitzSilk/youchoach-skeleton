import {Component, OnInit} from '@angular/core';
import {InitMaterializeComponent} from '../init-materialize.component';
import {User} from "../classes/user";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends InitMaterializeComponent implements OnInit {

  user: User;

  constructor() {
    super();
  }

  ngOnInit(): void {

  }

}
