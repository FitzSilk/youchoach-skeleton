import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthenticationService} from '../authentication/authentication.service';
import {Observable} from 'rxjs';
import {Session} from '../classes/session';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private sessionUrl = `${environment.backendUrl}/session`;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {
  }


  createSession(session: Session): Observable<Session> {
    return this.http.post<Session>(this.sessionUrl, session, this.httpOptions);
  }
}
