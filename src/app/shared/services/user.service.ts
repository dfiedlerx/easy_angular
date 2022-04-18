import { Injectable } from '@angular/core';
import { userList } from '../constants/mocks/user-list.mock';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getAll() : Array<User> {
    return userList;
  }

  get(id : number) : User|undefined {
    return userList.find((e) => {
      return e.id === id;
    })
  }

  put(user: User) : void {
    userList.push(user);
  }

}
