import {Injectable} from '@angular/core';
import {User} from '../classes/user';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userUrl = `${environment.backendUrl}/user`;
  users: User[];
  httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

  constructor(private http: HttpClient) {
  }

  saveUser(user: User): Observable<User> {
    return this.http.post<User>(this.userUrl, user, this.httpOptions);
  }

  getUserById(id: string): Observable<User> {
    const url = `${this.userUrl}/${id}`;
    return this.http.get<User>(url);
  }

  getUserByUsername(userName: string): Observable<User> {

    const url = `${this.userUrl}/myprofile/`;
    return this.http.post<User>(url, userName, this.httpOptions);
  }
}
