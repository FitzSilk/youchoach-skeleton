import {Component, OnInit} from '@angular/core';
import {User} from '../classes/user';
import {UserService} from '../services/user.service';
import {AuthenticationService} from '../authentication/authentication.service';
import {debounceTime, distinctUntilChanged, filter, map, switchMap} from 'rxjs/operators';
import {Subject} from 'rxjs';


@Component({
  selector: 'app-coaches-overview',
  templateUrl: './coaches-overview.component.html',
  styleUrls: ['./coaches-overview.component.css']
})
export class CoachesOverviewComponent implements OnInit {

  users: User[];
  allTheCoaches: User[];
  user: User;
  optionTopic: string;
  option: string;
  topics = ['French', 'Mathematics', 'HTML 5', 'Economic Science', 'Dutch', 'German'];
  private searchTerms = new Subject<string>();

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

      this.users = this.allTheCoaches.filter(user => user.coach.firstTopic === topics || user.coach.secondTopic === topics);
    }
  }

  filterByYear(year): void {
    let userContainer;
    let userPlaceholder;
    if (year === '') {
      this.users = this.allTheCoaches;
    } else {
      year.map(grade => {
          userPlaceholder = this.allTheCoaches.filter(user => {
              let doesExist: boolean;
              doesExist = false;
              if (user.coach.classesForFirstTopic.includes(grade)) {
                doesExist = true;
              }
              if (user.coach.classesForSecondTopic) {
                if (user.coach.classesForSecondTopic.includes(grade)) {
                  doesExist = true;
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
          console.log(userContainer);
        }
      );
      this.users = userContainer;
    }
  }

  search(term: string): void {
    this.searchTerms.next(term);
    this.searchTerms.subscribe((data) => this.users = this.allTheCoaches.filter(user => user.firstName.toLowerCase().includes(data) || user.lastName.toLowerCase().includes(data)));
    // this.users = this.allTheCoaches.filter(user => user.firstName.includes(this.searchTerms.));
  }

  enableSelect() {
    const elems = document.querySelectorAll('select');
    const instance = M.FormSelect.init(elems, {});

  }
}
