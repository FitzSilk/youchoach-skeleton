export class SecuredUser {
  id: number;
  username: string;
  password: string;
  roles: number;


  constructor(username: string, password: string, roles: number) {
    this.username = username;
    this.password = password;
    this.roles = roles;
  }
}
