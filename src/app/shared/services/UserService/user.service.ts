import { Injectable } from '@angular/core';
import { userLoggedId } from '../../constants/configs/users.config';
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

  getLoggedUserId() : number {
    return userLoggedId;
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

  getFollowingQuantity (id: number) : number {
    return this.get(id)?.follow.length as number;
  }

  getFollowersQuantity (id: number) : number {
    let quantity = 0;

    for (let i = 0; i < userList.length; i++) {
      if (userList[i]['follow'].includes(id)) {
        quantity += 1;
      }
    }

    return quantity;

  }

  checkIfUserFollowsOtherById(idFollower: number, idFollowing: number) : boolean {
    //For Better Test Coverage
    let user : User =  this.get(idFollower) as User;
    return user.follow.includes(idFollowing);
  }

  userMakeFollow(idFollower: number, idFollowing: number) : void {
    userList[userList.findIndex(item => {
      return item.id === idFollower
    })].follow.push(idFollowing);
  }

  userMakeUnfollow(idFollower: number, idFollowing: number) : void {
    let user : User = userList[userList.findIndex(item => {
      return item.id === idFollower
    })];

    user.follow.splice(user.follow.indexOf(idFollowing), 1);
    
  }

}
