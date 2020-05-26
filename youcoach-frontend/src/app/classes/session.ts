import {User} from './user';

export class Session {
  id: string;
  subject: string;
  remarks: string;
  location: string;
  date: string;
  coachee: User;
  coach: User;

  constructor(subject: string, remarks: string, location: string, date: string, coachee: User, coach: User) {
    this.subject = subject;
    this.remarks = remarks;
    this.location = location;
    this.date = date;
    this.coachee = coachee;
    this.coach = coach;
  }
}
