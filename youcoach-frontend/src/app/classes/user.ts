import {SecuredUser} from './secureduser';
import {Coach} from './coach';

export class User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  securedUser: SecuredUser;
  pictureUrl: string;
  coach: Coach;


  constructor(firstName: string, lastName: string, email: string, securedUser: SecuredUser, pictureUrl: string, coach: Coach) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.securedUser = securedUser;
    this.pictureUrl = pictureUrl;
    this.coach = coach;
  }
}
