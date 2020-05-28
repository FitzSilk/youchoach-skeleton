import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Session} from '../classes/session';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private sessionUrl = `${environment.backendUrl}/session`;
  private topicUrl = `${environment.backendUrl}/topic`;
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

  getTopics(): Observable<string[]> {
    return this.http.get<string[]>(this.topicUrl);
  }

  getCoachSessionByID(id: string): Observable<Session[]> {
    return this.http.get<Session[]>(this.sessionUrl + '/view/coach/' + id);
  }

  getCoacheeSessionByID(id: string): Observable<Session[]> {
    return this.http.get<Session[]>(this.sessionUrl + '/view/coachee/' + id);
  }

  updateSessionStatus(session: Session) {
    return this.http.put<Session>(this.sessionUrl, status, this.httpOptions);
  }
}
