import { TestBed } from '@angular/core/testing'
import { userList } from '../../constants/mocks/user-list.mock'
import { User } from '../../models/user.model'

import { UserService } from './user.service'

describe('UserService', () => {
  let service: UserService
  let existsExampleUser: User
  let newExampleUser: User
  let userListTest : Array<User>

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(UserService)
    existsExampleUser = {
      id: 270447,
      name: 'Alana Williams',
      photo: 'assets/images/resources/photo4.jpg',
    }
    newExampleUser = {
      id: 6577897,
      name: 'Daniel Fiedler',
      photo: 'assets/images/resources/photo99.jpg'
    }

    userListTest = userList;

  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('should get returns undefined because id is unknow', () => {
    expect(service.get(11111111)).toBeUndefined()
  })

  it('should getAll equal userList constant', () => {
    expect(service.getAll()).toEqual(userListTest)
  })

  it('should get returns user called Alana because this id exists', () => {
    expect(service.get(existsExampleUser.id)).toEqual(existsExampleUser)
  })

  beforeEach(() => {
    service.put(newExampleUser);
  });

  it('shoud put create a new user in list', () => {
    expect(service.get(newExampleUser.id)).toEqual(newExampleUser);
  })
  

  it ('should delete removes newExampleUser id from list', () => {
    service.delete(newExampleUser.id);
    expect(service.get(newExampleUser.id)).toBeUndefined();
  })

})
