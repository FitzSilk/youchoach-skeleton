import {SecuredUser} from './secureduser';

export class User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  securedUser: SecuredUser;
  pictureUrl: string;


  constructor(firstName: string, lastName: string, email: string, securedUser: SecuredUser, pictureUrl: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.securedUser = securedUser;
    this.pictureUrl = pictureUrl;
  }
}
