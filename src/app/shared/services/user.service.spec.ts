import { TestBed } from '@angular/core/testing'
import { userList } from '../constants/mocks/user-list.mock'
import { User } from '../models/user.model'

import { UserService } from './user.service'

describe('UserService', () => {
  let service: UserService
  let existsExampleUser: User
  let newExampleUser: User

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
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('should getAll equal userList constant', () => {
    expect(service.getAll()).toEqual(userList)
  })

  it('should get returns undefined beacuse id is unknow', () => {
    expect(service.get(newExampleUser.id)).toBeUndefined()
  })

  it('should getAll returns user called Alana because this id exists', () => {
    expect(service.get(existsExampleUser.id)).toEqual(existsExampleUser)
  })

  it('shoud put create a new user in list', () => {
    service.put(newExampleUser);
    expect(service.get(newExampleUser.id)).toEqual(newExampleUser);
  })

})
