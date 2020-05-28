import {User} from './user';

export class Session {
  id: string;
  subject: string;
  remarks: string;
  location: string;
  date: string;
  coachee: User;
  coach: User;
  status: string;

  constructor(subject: string, remarks: string, location: string, date: string, coachee: User, coach: User, status: string) {
    this.subject = subject;
    this.remarks = remarks;
    this.location = location;
    this.date = date;
    this.coachee = coachee;
    this.coach = coach;
    this.status = status;
  }
}
