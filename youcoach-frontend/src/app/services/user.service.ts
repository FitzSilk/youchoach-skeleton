import {Injectable} from '@angular/core';
import {User} from '../classes/user';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {environment} from '../../environments/environment';
import {AuthenticationService} from '../authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userUrl = `${environment.backendUrl}/user`;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  /*const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');*/

  constructor(private http: HttpClient, private authenticationService: AuthenticationService) {
  }

  saveUser(user: User): Observable<User> {
    return this.http.post<User>(this.userUrl, user, this.httpOptions);
  }

  updateUser(user: User): Observable<User> {
    const id = this.authenticationService.getId();
    const url = `${this.userUrl}/myprofile/` + id;
    return this.http.put<User>(url, user, this.httpOptions);
  }

  getUserById(id: string): Observable<User> {
    const url = `${this.userUrl}/${id}`;
    return this.http.get<User>(url);
  }


  getUserByUsername(userName: string): Observable<User> {

    const url = `${this.userUrl}/myprofile/`;
    return this.http.post<User>(url, userName, this.httpOptions);
  }

  getCoaches(): Observable<User[]> {
    const url = `${this.userUrl}/coach`;
    return this.http.get<User[]>(url);
  }

  updateCoach(user: User): Observable<User> {
    console.log(user);
    const id = this.authenticationService.getId();
    const url = `${this.userUrl}/coach/update/` + id;
    console.log(url);
    return this.http.put<User>(url, user, this.httpOptions);
  }
}
