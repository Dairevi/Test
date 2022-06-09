import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  public users = [
    {
      id: '1',
      name: 'John',
    },
    {
      id: '2',
      name: 'Bob'
    },
    {
      id: '3',
      name: 'Jeff'
    }
  ];
  getUsers(){
    return this.users;
  };
}
