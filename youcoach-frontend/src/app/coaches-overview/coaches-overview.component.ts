import {AfterViewInit, Component, OnInit} from '@angular/core';
import {User} from '../classes/user';
import {UserService} from '../services/user.service';
import {AuthenticationService} from '../authentication/authentication.service';
import {debounceTime, distinctUntilChanged, filter, map, switchMap} from 'rxjs/operators';
import {Subject} from 'rxjs';
import * as M from 'materialize-css';
import {dashCaseToCamelCase} from '@angular/compiler/src/util';


@Component({
  selector: 'app-coaches-overview',
  templateUrl: './coaches-overview.component.html',
  styleUrls: ['./coaches-overview.component.css']
})
export class CoachesOverviewComponent implements OnInit, AfterViewInit {

  users: User[];
  allTheCoaches: User[];
  user: User;
  optionTopic: string;
  option: string;
  topics = ['French', 'Mathematics', 'HTML 5', 'Economic science', 'Dutch', 'German'];
  private searchTerms = new Subject<string>();
  private selectedTopic;
  private selectedYear: string[];

  constructor(private userService: UserService, private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
    this.enableSelect();
    this.loadUser();
    this.getCoaches();
  }

  ngAfterViewInit() {
    M.AutoInit();
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


  filterByYearAndTopic(): void {
    console.log(this.selectedTopic);
    let userContainer;
    let userPlaceholder;
    if (this.selectedYear === undefined || this.selectedYear[0] === '' || this.selectedYear.length === 0) {
      console.log(this.selectedTopic);
      this.users = this.allTheCoaches;
      if (this.selectedTopic === '' || this.selectedTopic === undefined) {
        this.users = this.allTheCoaches;
      } else {
        this.users = this.allTheCoaches.filter(user => user.coach.firstTopic === this.selectedTopic
          ||
          user.coach.secondTopic === this.selectedTopic);
      }
    } else {
      this.selectedYear.map(grade => {
          userPlaceholder = this.allTheCoaches.filter(user => {
              let doesExist: boolean;
              doesExist = false;
              if (user.coach.classesForFirstTopic.includes(grade)) {
                if (user.coach.firstTopic === this.selectedTopic || this.selectedTopic === '' || this.selectedTopic === undefined) {
                  doesExist = true;
                }
              }
              if (user.coach.classesForSecondTopic) {
                if (user.coach.classesForSecondTopic.includes(grade)) {
                  if (user.coach.secondTopic === this.selectedTopic || this.selectedTopic === '' || this.selectedTopic === undefined) {
                    doesExist = true;
                  }
                }
              }
              if (userContainer != null && userContainer.includes(user)) {
                doesExist = false;
              }
              return doesExist;
            }
          );
          if (userContainer != null) {
            userContainer = userContainer.concat(userPlaceholder);
          } else {
            userContainer = userPlaceholder;
          }
        }
      );
      this.users = userContainer;
    }
  }

  topicSelected(topic) {
    this.selectedTopic = topic;
    this.filterByYearAndTopic();
  }

  yearSelected(year) {
    this.selectedYear = year;
    this.filterByYearAndTopic();
  }

  search(term: string): void {
    this.searchTerms.next(term);
    this.searchTerms.subscribe(data => console.log(data));
    this.searchTerms.subscribe((data) => {
      if (data.length >= 3) {
        this.users = this.allTheCoaches.filter(user => user.firstName.toLowerCase().includes(data.toLowerCase())
          || user.lastName.toLowerCase().includes(data.toLowerCase()));
      } else {
        this.filterByYearAndTopic();
      }
    });
  }

  enableSelect() {
    const elems = document.querySelectorAll('select');
    const instance = M.FormSelect.init(elems, {});
  }
}
