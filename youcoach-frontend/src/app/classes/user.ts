import {SecuredUser} from './secureduser';

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  securedUser: SecuredUser;
}
