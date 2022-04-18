import { Injectable } from '@angular/core';
import { userList } from '../../constants/mocks/user-list.mock';
import { User } from '../../models/user.model';
import { deleteArrayItemByKeyValue } from '../../utils/ArrayUtils/arrays.utils';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getAll() : Array<User> {
    return userList;
  }

  get(id : number) : User | undefined {
    return userList.find((e) => {
      return e.id === id;
    })
  }

  put(user: User) : void {
    userList.push(user);
  }

  delete(id: number) : boolean {
    for (let i = 0; i < userList.length; i++) {
      if (userList[i]['id'] === id) {
        userList.splice(i, 1)
        i--
      }
    }

    return true;
  }

}
