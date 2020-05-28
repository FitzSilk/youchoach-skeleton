import {Component, OnInit} from '@angular/core';
import {SessionService} from '../services/session.service';
import {AuthenticationService} from '../authentication/authentication.service';
import {Session} from '../classes/session';

@Component({
  selector: 'app-coach-session-overview',
  templateUrl: './coach-session-overview.component.html',
  styleUrls: ['./coach-session-overview.component.css']
})
export class CoachSessionOverviewComponent implements OnInit {

  upcomingSessions: Session[] = [];
  waitingForFeedbackSessions: Session[] = [];
  archivedSessions: Session[] = [];

  constructor(private sessionService: SessionService, private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
    this.getSessions();
  }

  getSessions() {
    const userId = this.authenticationService.getId();
    this.sessionService.getCoachSessionByID(userId).subscribe(sessions => {
      sessions.map(session => {
        if (session.status === 'PENDING' || session.status === 'ACCEPTED') {
          this.upcomingSessions.push(session);
        } else if (session.status === 'WAITING_FEEDBACK') {
          this.waitingForFeedbackSessions.push(session);
        } else {
          this.archivedSessions.push(session);
        }
      });
    });
  }
  updateStatus(session: Session, status: string) {
    session.status = status;
    this.sessionService.updateSessionStatus(session).subscribe(() => {
        this.upcomingSessions = [];
        this.waitingForFeedbackSessions = [];
        this.archivedSessions = [];
        this.getSessions();
      }
    );

  }
}
