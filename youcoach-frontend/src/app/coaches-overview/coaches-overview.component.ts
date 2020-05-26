import {Component, OnInit} from '@angular/core';
import {User} from '../classes/user';
import {UserService} from '../services/user.service';
import {AuthenticationService} from '../authentication/authentication.service';
import {filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-coaches-overview',
  templateUrl: './coaches-overview.component.html',
  styleUrls: ['./coaches-overview.component.css']
})
export class CoachesOverviewComponent implements OnInit {

  users: User[];
  allTheCoaches: User[];
  user: User;
  option: string;
  optionYear: string;
  topics = ['French', 'Mathematics', 'HTML 5', 'Economic Science', 'Dutch', 'German'];

  constructor(private userService: UserService, private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
    this.enableSelect();
    this.loadUser();
    this.getCoaches();

  }

  loadUser(): void {
    const id: string = this.authenticationService.getId();
    this.userService.getUserById(id).subscribe(user => this.user = user);
  }

  getCoaches(): void {
    this.userService.getCoaches().pipe(
      map(userList => userList.filter(user => user.id !== this.authenticationService.getId()))
    ).subscribe(users => {
      this.users = users;
      this.allTheCoaches = users;
    });

  }

  filterCoaches(topics): void {
    console.log(topics);
    if (topics === '') {
      this.users = this.allTheCoaches;
    } else {
      /*const collectItems = options => options.reduce((selectedLabels, { selected, label }) => {
        if (selected) selectedLabels.push(label)
        return selectedLabels;
      }, []);*/

      /*for (const topic of topics) {

      }*/

      this.users = this.allTheCoaches.filter(user => user.coach.firstTopic === topics || user.coach.secondTopic === topics);
    }
  }

  filterByYear(year: string): void {
    console.log(year);
    if (year === '') {
      this.users = this.allTheCoaches;
    } else {
      this.users = this.allTheCoaches.filter(user => user.coach.classesForFirstTopic === year || user.coach.classesForSecondTopic === year);
    }
  }

  enableSelect() {
    const elems = document.querySelectorAll('select');
    const instance = M.FormSelect.init(elems, {});

  }
}
