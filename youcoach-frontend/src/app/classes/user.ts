import {SecuredUser} from './secureduser';

export class User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  securedUser: SecuredUser;


  constructor(firstName: string, lastName: string, email: string, securedUser: SecuredUser) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.securedUser = securedUser;
  }
}
